Ext.define("MyApp.view.todos.TodoGrid", {
  extend: "Ext.grid.Panel",
  xtype: "todogrid",
  reference: "todogrid",
  controller: "todogridviewcontroller",
  store: {
    type: "todos",
  },
  selModel: {
    selType: "checkboxmodel",
    mode: "MULTI",
  },
  columns: [
    { dataIndex: "_id", text: "ID" },
    { dataIndex: "title", text: "Title", flex: 1 },
    { dataIndex: "completed", text: "Completed", flex: 1 },
    { dataIndex: "userId", text: "User ID" },
  ],
  tbar: [
    {
      text: "Add Todo",
      listeners: {
        click: "onAddTodoClicked",
      },
    },
    {
      text: "View Todo",
      listeners: {
        click: "onViewTodoClicked",
      },
      bind: {
        disabled: "{!todogrid.selection}",
      },
    },
  ],
  bbar: {
    xtype: "pagingtoolbar",
    displayInfo: true,
  },
});
