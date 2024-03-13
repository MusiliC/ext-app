Ext.define("MyApp.store.Menu", {
  extend: "Ext.data.TreeStore",
  alias: "store.menu",
  root: {
    text: "Root",
    expanded: true,
    children: [
      {
        text: "App Data",
        iconCls: "fas fa-users-cog",
        children: [
          {
            text: "Users",
            iconCls: "fa fa-users",
            className: "usergrid",
            leaf: true,
          },
          {
            text: "Todos",
            iconCls: "fas fa-user-secret",
            className: "todogrid",
            leaf: true,
          },
          {
            text: "Albums",
            leaf: true,
            iconCls: "fa-image",
            items: [{ xtype: "albumgrid" }],
          },
        ],
      },
      {
        text: "Static Data",
        iconCls: "fa fa-database fa-lg",
        children: [
          {
            text: "Posts",
            iconCls: "fa fa-users",
            className: "postgrid",
            leaf: true,
          },
          {
            text: "Personnel",
            iconCls: "fa fa-users",
            leaf: true,
            className: "mainlist",
          },
          
        ],
      },
      {
        text: "Grouping and Summary",
        iconCls: "fa fa-database fa-lg",
        children: [
          {
            text: "Groupings",
            className: "groupinggrid",
            iconCls: "fa fa-users",
            leaf: true,
          },
          {
            text: "Summary",
            className: "summarygrid",
            iconCls: "fa fa-users",
            leaf: true,
          },
        ],
      },
    ],
  },
});
