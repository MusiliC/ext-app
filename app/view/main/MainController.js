/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 */
Ext.define("MyApp.view.main.MainController", {
  extend: "Ext.app.ViewController",

  alias: "controller.main",

  routes: {
    home: "onHomeRoute",
  },

  onHomeRoute: function () {
    let mainPanel = this.getMainPanel();
    if (mainPanel) {
      mainPanel.setActiveTab(0);
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
  onMainMenuItemClick: function (view, record, item, index, eOptions) {
    let mainPanel = this.getMainPanel();
    let activeTab = mainPanel.items.findBy(
      (tab) => tab.title === record.get("text")
    );
    if (!activeTab && record.get("leaf")) {
      //create new tab
      activeTab = mainPanel.add({
        closable: true,
        xtype: record.get("className"),
        title: record.get("text"),
        iconCls: record.get("iconCls"),
      });
    }
    mainPanel.setActiveTab(activeTab);
  },
});
