Ext.define("MyApp.view.todos.TodoGridViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.todogridviewcontroller",
  onAddTodoClicked: function (btn, e, eOptions) {
    var wd = Ext.create({
      xtype: "todoformwindow",
      viewModel: {
        data: {
          newTitle: "Add new todo",
          record: record,
        },
      },
    });
    wd.show();
  },
  onViewTodoClicked: function (btn, e, eOptions) {
    let grid = this.getView(),
    record = grid.getSelectionModel().getSelection()[0];

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
