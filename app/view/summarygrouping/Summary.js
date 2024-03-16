Ext.define("MyApp.view.fmviews.Summary", {
  extend: "Ext.tab.Panel",
  xtype: "summary",
  items: [
    {
      items: [
        {
          xtype: "summarygrid",
        },
      ],
    },
  ],
});
