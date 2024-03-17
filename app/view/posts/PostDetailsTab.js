Ext.define("MyApp.view.posts.PostDetailsTab", {
  extend: "Ext.tab.Panel",
  xtype: "postdetailstab",
  items: [
    {
      xtype: "form",
      title: "Post Information",
      layout: "form",
      items: [
        {
          xtype: "textfield",
          fieldLabel: "User id",
          bind: {
            value: "{record.userId}",
          },
        },
        {
          xtype: "textfield",
          fieldLabel: "Post Title",
          bind: {
            value: "{record.title}",
          },
        },
        {
          xtype: "textfield",
          fieldLabel: "Body",
          bind: {
            value: "{record.body}",
          },
        },
      ],
    },
  ],
});
