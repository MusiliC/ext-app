Ext.define("MyApp.view.posts.PostGridViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.postgridviewcontroller",
  onAddPostClicked: function (btn, e, eOptions) {
    
    var wd = Ext.create({
      xtype: "postformwindow",
    });
    wd.show();
  },
  onFormFields: function (btn, e, eOptions) {
    Ext.create({
      xtype: "formfieldsdemo",
    });  
  },
  onLayoutsClicked: function (btn, e, eOptions) {
    Ext.create({
      xtype: "borderlayout",
    });  
  }
});
