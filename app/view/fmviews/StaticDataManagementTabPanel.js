Ext.define("MyApp.view.fmviews.StaticDataManagementTabPanel", {
  extend: "Ext.tab.Panel",
  xtype: "staticdatamanagementtabpanel",
  items: [
    {
      title: "Posts",
      items: [
        {
          xtype: "postgrid",
        },
      ],
    },
    {
      title: "Todos",
      items: [
        {
          xtype: "todogrid",
        },
      ],
    },
  ],
});
