Ext.define("MyApp.view.fmviews.StaticDataManagementTabPanel", {
  extend: "Ext.tab.Panel",
  xtype: "staticdatamanagementtabpanel",
  height: 0,
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
