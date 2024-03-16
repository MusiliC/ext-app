Ext.define("MyApp.view.fmviews.Grouping", {
  extend: "Ext.panel.Panel",
  xtype: "grouping",
  items: [
    {
      items: [
        {
          xtype: "groupinggrid",
        },
      ],
    },
  ],
});
