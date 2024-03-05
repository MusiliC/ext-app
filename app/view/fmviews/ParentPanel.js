Ext.define("MyApp.view.fmviews.ParentPanel", {
  extend: "Ext.panel.Panel",
  xtype: "parentpanel",
  items: [
    {
      xtype: "usergrid",
      height: '500'
    },
    {
      xtype: "staticdatamanagementtabpanel",
    },
  ],
});
