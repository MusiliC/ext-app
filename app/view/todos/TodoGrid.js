Ext.define("MyApp.view.todos.TodoGrid", {
  extend: "Ext.grid.Panel",
  xtype: "todogrid",
  store: {
    type: "todos",
  },
  tbar: [
    {
      text: "Add Todo",
    },
  ],
  columns: [
    { dataIndex: "id", text: "ID" },
    { dataIndex: "title", text: "Title", flex: 1 },
    { dataIndex: "completed", text: "Completed", flex: 1 },
    { dataIndex: "userId", text: "User ID" },
  ],
  selModel: {
    selType: "checkboxmodel",
    mode: "SINGLE",
  },
  bbar: {
    xtype: "pagingtoolbar",
    displayInfo: true,
  },
  scrollable: true,
  height: 600,
});
