Ext.define("MyApp.view.employers.GroupingSummary", {
    extend: "Ext.panel.Panel",
    xtype: "groupingsummary",   
    items: [
      {
        title: "Grouping",
        items: [
          {
            xtype: "employergrid",
          },
        ],
      },
    //   {
    //     title: "Summary",
    //     items: [
    //       {
    //         xtype: "summarygrid",
    //       },
    //     ],
    //   },
    ],
  });
  