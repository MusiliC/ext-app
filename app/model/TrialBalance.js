Ext.define("MyApp.model.TrialBalance", {
  extend: "Ext.data.Model",
  idProperty: "date",
  fields: ["date", "particular", "name"],
  proxy: {
    // Ext.util.ObjectTemplate
    type: "rest",
    url: "resources/accounts.json",
    reader: {
      type: "json",
      rootProperty: "rows",
      totalProperty: "totalCount",
    },
  },
});
