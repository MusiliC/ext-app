Ext.define("MyApp.Application", {
  extend: "Ext.app.Application",

  name: "MyApp",

  quickTips: false,
  platformConfig: {
    desktop: {
      quickTips: true,
    },
  },

  defaultToken: "home",
  listen: {
    global: {
      unmatchedroute: "onUnmatchedRoute",
    },
  },
  onUnmatchedRoute: function (token) {
    Ext.Msg.show({
      title: "Failure",
      msg: "Unknown path: /" + token,
      buttons: Ext.Msg.OK,
      icon: Ext.Msg.ERROR,
    });
  },

  onHomeRoute: function () {
    let mainPanel = this.getMainPanel();
    if (mainPanel) {
      mainPanel.setActiveTab(0);
    }
  },

  onAppUpdate: function () {
    Ext.Msg.confirm(
      "Application Update",
      "This application has an update, reload?",
      function (choice) {
        if (choice === "yes") {
          window.location.reload();
        }
      }
    );
  },

  launch: function (profile) {
    // It's important to note that this type of application could use
    // any type of storage, i.e., Cookies, LocalStorage, etc.
    var loggedIn;

    // Check to see the current value of the localStorage key
    loggedIn = localStorage.getItem("MyAppLoggedIn");

    // This ternary operator determines the value of the TutorialLoggedIn key.
    // If TutorialLoggedIn isn't true, we display the login window,
    // otherwise, we display the main view
    Ext.widget(loggedIn ? "app-main" : "login");
    //  Ext.create({
    //   xtype: loggedIn ? 'app-main' : 'login'
    // })
  },
});
