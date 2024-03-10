Ext.define("MyApp.view.summarygrouping.GroupingGrid", {
  extend: "Ext.grid.Panel",
  xtype: "groupinggrid",
  reference: "groupingrid",
  store: {
    type: "employergrouping",
  },
  columns: [
    { text: "Name", dataIndex: "name", flex: 1 },
    { text: "Seniority", dataIndex: "seniority", flex: 1 },
  ],
  features: [{ ftype: "grouping" }],
});
