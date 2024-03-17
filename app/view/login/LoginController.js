Ext.define("MyApp.view.login.LoginController", {
  extend: "Ext.app.ViewController",
  alias: "controller.login",
  init: function () {
    let me = this,
      view = me.getView(),
      vm = me.getViewModel(),
      refs = me.getReferences(),
      button = refs["lng-btn"];

    var lang = localStorage ? localStorage.getItem("user-lang") || "en" : "en";
    button.setIconCls(lang);
    if (lang == "en") {
      button.setText("English");
    } else if (lang == "es") {
      button.setText("Español");
    } else {
      button.setText("France");
    }
  },
  onLoginClick: function (btn, e, eOpts) {
    let window = this.getView();
    let ref = window.getReferences();
    let form = ref["loginform"].getForm();
    let me = this; // Capture reference to 'this'

    if (form.isValid()) {
      let formValues = form.getValues();

      // Construct JSON data
      let jsonData = {
        email: formValues.email,
        password: formValues.password,
      };

      Ext.Ajax.request({
        url: "http://localhost:3000/auth/signin",
        method: "POST",
        jsonData: jsonData,
        success: function (response, opts) {
          var obj = Ext.decode(response.responseText);
          let userToken = obj.token;
          localStorage.setItem("MyAppLoggedIn", true);
          localStorage.setItem("hasAccessToUsers", userToken);
          Ext.Msg.alert("Successful", "Welcome.");

          me.getView().destroy();
          // Add the main view to the viewport
          Ext.create({
            xtype: "app-main",
          });
          Ext.widget("app-main");
        },

        failure: function (response, opts) {
          let errorMessage;
          switch (response.status) {
            case 400:
            case 404:
              errorMessage = "Incorrect email or password.";
              break;
            default:
              errorMessage =
                "Server-side failure with status code " + response.status;
              break;
          }

          Ext.Msg.show({
            title: "Login Failed",
            msg: errorMessage,
            buttons: Ext.Msg.OK,
            icon: Ext.Msg.ERROR,
          });
        },
      });
    } else {
      Ext.Msg.alert("Invalid Data", "Please correct form errors.");
    }

    {
      success: true;
      msg: "Login successfully";
    }
  },

  onMenuItemClick: function (item, e, options) {
    var menu = this.getView();
    localStorage.setItem("user-lang", item.iconCls);
    window.location.reload();
  },
});
