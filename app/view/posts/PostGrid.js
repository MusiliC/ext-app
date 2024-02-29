Ext.define("MyApp.view.posts.PostGrid", {
  extend: "Ext.grid.Panel",
  xtype: "postgrid",
  store: {
    type: "posts",
  },
  tbar:[{
    text: "Add Post"
  }],
  columns: [
    { dataIndex: "id", text: "ID" },
    { dataIndex: "title", text: "Title", flex: 1 },
    { dataIndex: "body", text: "Body", flex: 2 },
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
  height: 800,
});
