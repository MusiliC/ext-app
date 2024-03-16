Ext.define("MyApp.view.users.Users", {
  extend: "Ext.panel.Panel",
  xtype: "users",
  height: 300,
  viewModel: {
    data: {
      record: null,
    },
  },
  items: [
    {
      xtype: "usergrid",
    },
    {
      xtype: "userdetailstab",
    },
  ],
});
