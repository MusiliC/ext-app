Ext.define("MyApp.view.users.UserGrid", {
  extend: "Ext.grid.GridPanel",
  xtype: "usergrid",
  reference: "usergrid",
  controller: "usergridcontroller",

  store: {
    type: "users",
  },
  height: 600,
  plugins: {
    cellediting: {
      clicksToEdit: 1,
    },
  },
  selModel: {
    selType: "checkboxmodel",
  },
  columns: [
    { xtype: "rownumberer" },
    {
      dataIndex: "_id",
      text: "ID",
    },
    {
      dataIndex: "username",
      text: "Username",
      editor: "textfield",
      flex: 2,
    },
    {
      dataIndex: "email",
      text: "Email",
      editor: {
        xtype: "textfield",
        completeOnEnter: false,
        allowBlank: false,
      },
      renderer: function (value) {
        return Ext.String.format('<a href="mailto:{0}">{1}</a>', value, value);
      },
      flex: 3,
    },
    {
      dataIndex: "city",
      text: "City",
      flex: 2,
    },
  ],
  tbar: [
    {
      text: "Add User",
    },
    {
      text: "Model binding",
      handler: "onModelBinding",
    },

    "->",
    {
      text: "Show Details",
      handler: "onShowDetails",
      bind: {
        disabled: "{!usergrid.selection}",
      },
    },
  ],

  bbar: {
    xtype: "pagingtoolbar",
    displayInfo: true,
  },
  listeners: {
    cellclick: "onUserGridCellClick",
    celldblclick: "onUserGridCellDblClick",
    cellcontextmenu: "onUserGridCellContextMenu",
    selectuser: 'onSelectUser'
  },
});
