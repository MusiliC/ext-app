/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define("MyApp.view.main.MainController", {
  extend: "Ext.app.ViewController",

  alias: "controller.main",

  routes: {
    home: "onHomeRoute",
    "users|reviewpanel|posts|todos|summary|grouping|albums": {
      action: "onRoute",
      before: "onBeforeRoute",
    },
    "users/:id": {
      action: "onUserSelect",
      before: "onBeforeUserSelect",
      conditions: {
        ":id": "([0-9]+)",
      },
    },
    "posts/:id": {
      action: "onPostSelect",
      before: "onBeforePostSelect",
      conditions: {
        ":id": "([0-9]+)",
      },
    },
  },

  onHomeRoute: function () {
    let mainPanel = this.getMainPanel();
    if (mainPanel) {
      mainPanel.setActiveTab(0);
    }
  },

  onRoute: function name() {
    var me = this,
      hash = Ext.util.History.getToken(),
      mainmenu = this.getMainMenu();
    me.locateMainMenuItem(mainmenu, hash);
  },

  //! user select
  onUserSelect: function (id) {
    //fire an event to select the record on the user grid
    this.getUserGrid().fireEvent("selectuser", id);
    //console.log(id);
  },

  onBeforeUserSelect: function (id, action) {
    var me = this,
      hash = "users",
      mainMenu = me.getMainMenu();
    me.locateMainMenuItem(mainMenu, hash);

    //get reference to grid
    let grid = this.getUserGrid();

    //get store
    let store = grid.getStore();
    //find record with the id
    let record = store.findRecord("_id", id);

    if (record) {
      action.resume();
    } else {
      action.stop();
    }
  },

  //! post select
  onPostSelect: function (id) {
    //fire an event to select the record on the user grid
    this.getPostGrid().fireEvent("selectpost", id);
 
  },

  onBeforePostSelect: function (id, action) {
    var me = this,
      hash = "posts",
      mainMenu = me.getMainMenu();
    me.locateMainMenuItem(mainMenu, hash);

    //get reference to grid
    let grid = this.getPostGrid();

    //get store
    let store = grid.getStore();
    //find record with the id
    let record = store.findRecord("_id", id);

    if (record) {
      action.resume();
    } else {
      action.stop();
    }
  },

  locateMainMenuItem: function (mainMenu, className) {
    //let store = mainMenu.getStore();

    let rootNode = mainMenu.getRootNode();
    let record = rootNode.findChild("className", className, true);
    this.openTab(record);
    mainMenu.getSelectionModel().select(record);
  },

  onBeforeRoute: function name(action) {
    var hash = Ext.util.History.getToken();

    //TODO: Make Ajax request to the server
    //TODO: Check if the user has permissions to navigate to this path
    //TODO: on success => action.resume()
    //TODO: on failure => action.stop()

    var hasAccessToUsers = localStorage.getItem("hasAccessToUsers");
    if (hasAccessToUsers) {
      action.resume();
    } else {
      Ext.Msg.show({
        title: "Failure",
        msg: "You do not have permission to access: /" + hash,
        buttons: Ext.Msg.OK,
        icon: Ext.Msg.ERROR,
      });
      action.stop();
    }
  },

  onMainMenuItemClick: function (view, record, item, index, e, eOpts) {
    this.redirectTo(record.get("className"));
  },

  onItemSelected: function (sender, record) {
    Ext.Msg.confirm("Confirm", "Are you sure?", "onConfirm", this);
  },

  onConfirm: function (choice) {
    if (choice === "yes") {
      //
    }
  },
  onLogout: function () {
    // Remove the localStorage key/value
    localStorage.removeItem("MyAppLoggedIn");

    // Remove Main View
    this.getView().destroy();

    // Add the Login Window
    Ext.widget("login");
  },

  getMainPanel: function () {
    return Ext.ComponentQuery.query("mainpanel")[0];
  },
  getUserGrid: function () {
    return Ext.ComponentQuery.query("usergrid")[0];
  },
  // ! Post
  getPostGrid: function () {
    return Ext.ComponentQuery.query("postgrid")[0];
  },
  getMainPanel: function () {
    return Ext.ComponentQuery.query("mainpanel")[0];
  },
  getMainMenu: function () {
    return Ext.ComponentQuery.query("mainmenu")[0];
  },

  openTab: function (record) {
    if (record) {
      let mainPanel = this.getMainPanel();
      let activeTab = mainPanel.items.findBy(
        (tabItem) => tabItem.title === record.get("text")
      );
      if (!activeTab && record.get("leaf")) {
        //create new tab using details from the record
        activeTab = mainPanel.add({
          closable: true,
          xtype: record.get("className"),
          title: record.get("text"),
          iconCls: record.get("iconCls"),
        });
      }
      mainPanel.setActiveTab(activeTab);
    }
  },
});
