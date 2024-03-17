Ext.define("MyApp.view.posts.PostGrid", {
  extend: "Ext.grid.Panel",
  xtype: "postgrid",
  reference: "postgrid",
  controller: "postgridviewcontroller",
  store: {
    type: "posts",
  },
  tbar: 
  {
    overflowHandler: 'menu',
    items: 
    [
      {
        text: "Add Post",
        iconCls: "fas fa-plus",
        listeners: {
          click: "onAddPostClicked",
        },
      },
      {
        fieldLabel: "Search",
        xtype: "textfield",
        listeners: {
          change: "onSearchKeyValueChange",
        },
      },
      {
        fieldLabel: "Choose User",
        xtype: "combo",
  
        store: {
          type: "users",
        },
        queryMode: "local",
        displayField: "username",
        valueField: "_id",
        listeners: {
          change: "onUserSelectionChange",
          select: "onUserSelected",
        },
      },
      {
        text: "Edit/View Post",
        iconCls: "fas fa-pencil-alt",
        listeners: {
          click: "onEditClicked",
        },
        bind: {
          disabled: "{!postgrid.selection}",
        },
      },
      {
        text: "Delete Post",
        iconCls: "far fa-trash-alt",
        listeners: {
          click: "onDeleteClicked",
        },
        bind: {
          disabled: "{!postgrid.selection}",
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
      {
        text: "Form VTypes",
        listeners: {
          click: "onVTypesClicked",
        },
      },
    ],
  },
 
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
