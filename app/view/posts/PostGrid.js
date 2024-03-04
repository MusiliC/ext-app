Ext.define("MyApp.view.posts.PostGrid", {
  extend: "Ext.grid.Panel",
  xtype: "postgrid",
  controller: "postgridviewcontroller",
  store: {
    type: "posts",
  },
  tbar: [
    {
      text: "Add Post",
      listeners: {
        click: "onAddPostClicked",
      },
    },

    {
      text: "Form fields",
      listeners: {
        click: "onFormFields",
      },
    },
    {
      text: "Layouts",
      listeners: {
        click: "onLayoutsClicked",
      },
    },
  ],
  columns: [
    { dataIndex: "id", text: "ID" },
    { dataIndex: "title", text: "Title", flex: 1 },
    { dataIndex: "body", text: "Body", flex: 2 },
    { dataIndex: "userId", text: "User ID", hidden: true },
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
