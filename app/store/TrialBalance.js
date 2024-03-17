Ext.define("MyApp.store.TrialBalance", {
    extend: "Ext.data.Store",
    alias: "store.trialbalance",
    model: "MyApp.model.TrialBalance",
    groupField: "name",
    autoLoad: true
  });
  