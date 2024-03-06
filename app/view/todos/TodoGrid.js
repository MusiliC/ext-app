Ext.define("MyApp.view.todos.TodoGrid", {
  extend: "Ext.grid.Panel",
  xtype: "todogrid",
  reference: "todogrid",
  controller: "todogridviewcontroller",
  store: {
    type: "todos",
  },
  tbar: [
    {
      text: "Add Todo",
      listeners: {
        click: "onAddTodoClicked",
      },
    },
  ],
  columns: [
    { dataIndex: "_id", text: "ID" },
    { dataIndex: "title", text: "Title", flex: 1 },
    { dataIndex: "completed", text: "Completed", flex: 1 },
    { dataIndex: "userId", text: "User ID" },
  ],
});
