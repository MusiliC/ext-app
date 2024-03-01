Ext.define("MyApp.view.todos.TodoGridViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.todogridviewcontroller",
  onAddTodoClicked: function (btn, e, eOptions) {
    console.log(btn.getText() + " was clicked");
    var wd = Ext.create({
      xtype: "todoformwindow",
    });
    wd.show();
  },
});
