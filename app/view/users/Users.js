Ext.define("MyApp.view.users.Users", {
  extend: "Ext.panel.Panel",
  xtype: "users",
  items: [
    {
      xtype: "usergrid",
    },
    {
      xtype: "tabpanel",
    },
  ],
});
