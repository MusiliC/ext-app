Ext.define("MyApp.view.users.UserDetailsTab", {
  extend: "Ext.tab.Panel",
  xtype: "userdetailstab",
  items: [
    {
      xtype: "form",
      title: "User Information",
      layout: "form",
      items: [
        {
          xtype: "textfield",
          fieldLabel: "Username",
          bind: {
            value: "{record.username}",
          },
        },
        {
          xtype: "textfield",
          fieldLabel: "Name",
          bind: {
            value: "{record.name}",
          },
        },
        {
          xtype: "textfield",
          fieldLabel: "City",
          bind: {
            value: "{record.city}",
          },
        },
      ],
    },
  ],
});
