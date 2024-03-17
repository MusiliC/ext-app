Ext.define("MyApp.view.trialbalance.TrialBalance", {
    extend: "Ext.grid.Panel",
    xtype: "trialbalance",
    reference: "trialbalance",
    store: {
      type: "trialbalance",
    },
    columns: [
      { text: "Date", dataIndex: "date", flex: 1 },
     
    ],
    features: [{ ftype: "grouping",  showSummaryRow: true}   ],
  });
  