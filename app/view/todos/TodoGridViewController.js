Ext.define("MyApp.view.todos.TodoGridViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.todogridviewcontroller",
  mixins: ["MyApp.mixin.GridMixin"],
  onAddTodoClicked: function (btn, e, eOptions) {
    var wd = Ext.create({
      xtype: "todoformwindow",
      viewModel: {
        data: {
          newTitle: "Add new todo",
        
        },
      },
    });
    wd.show();
  },
  onViewTodoClicked: function (btn, e, eOptions) {
    let record = this.getSelectedRecordByXType("todogrid");

    Ext.create({
      xtype: "todoformwindow",
      viewModel: {
        data: {
          newTitle: "Update todo",
          record: record,
        },
      },
    });
  },
});
