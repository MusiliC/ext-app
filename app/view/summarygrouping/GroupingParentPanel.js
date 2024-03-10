Ext.define("MyApp.view.fmviews.GroupingParentPanel", {
  extend: "Ext.tab.Panel",
  xtype: "groupingparentpanel",
  items: [
    {
      title: "Grouping",
      items: [
        {
          xtype: "groupinggrid",
        },
      ],
    },
    {
      title: "Summary",
      items: [
        {
          xtype: "summarygrid",
        },
      ],
    },
  ],
});
