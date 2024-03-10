Ext.define("MyApp.view.employers.EmployerGrid", {
  extend: "Ext.grid.Panel",
  title: "Employees",
  xtype: "employergrid",
  reference: "employergrid",
  controller: "employercontroller",
  store:{
    type: "employergrouping" 
  },
  columns: [
    { text: "Name", dataIndex: "name", flex: 1 },
    { text: "Seniority", dataIndex: "seniority", flex: 1 },
  ],
  features: [{ ftype: "grouping" }],

});
