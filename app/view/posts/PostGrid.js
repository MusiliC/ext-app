Ext.define("MyApp.view.posts.PostGrid", {
  extend: "Ext.grid.Panel",
  xtype: "postgrid",
  reference: "postgrid",
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
    { dataIndex: "_id", text: "ID" },
    { dataIndex: "title", text: "Title", flex: 1 },
    { dataIndex: "body", text: "Body", flex: 2 },
    { dataIndex: "userId", text: "User ID", hidden: false },
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
 
});
