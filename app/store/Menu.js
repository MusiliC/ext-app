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
            className: "users",
            leaf: true,
          },
          {
            text: "Todos",
            iconCls: "fas fa-user-secret",
            className: "todos",
            leaf: true,
          },
          // {
          //   text: "Albums",
          //   leaf: true,
          //   iconCls: "fa-image",
          //   items: [{ xtype: "albumgrid" }],
          // },
        ],
      },
      {
        text: "Static Data",
        iconCls: "fa fa-database fa-lg",
        children: [
          {
            text: "Posts",
            iconCls: "fa-solid fa-code",
            className: "posts",
            leaf: true,
          },
          {
            text: "Albums",
            iconCls: "fa-image",
            className: "albums",
            leaf: true,
          },
        ],
      },
      {
        text: "Review",
        iconCls: "fa fa-database fa-lg",
        children: [
          {
            text: "Review Panel",
            iconCls: "fa-solid fa-code",
            className: "reviewpanel",
            leaf: true,
          },
          {
            text: "Trial Balance",
            iconCls: "fa-solid fa-check",
            className: "trialbalance",
            leaf: true,
          },
        ],
      },
      {
        text: "Grouping and Summary",
        iconCls: "fa-solid fa-layer-group",
        children: [
          {
            text: "Groupings",
            className: "grouping",
            iconCls: "fa-solid fa-list",
            leaf: true,
          },
          {
            text: "Summary",
            className: "summarygrid",
            iconCls: "fa-solid fa-check",
            leaf: true,
          },
        ],
      },
    ],
  },
});
