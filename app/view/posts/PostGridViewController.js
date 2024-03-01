Ext.define("MyApp.view.posts.PostGridViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.postgridviewcontroller",
  onAddPostClicked: function (btn, e, eOptions) {
    console.log(btn.getText() + " was clicked");
    var wd = Ext.create({
      xtype: "postformwindow",
    });
    wd.show();
  },
});
