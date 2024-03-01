Ext.define("MyApp.view.posts.PostFormWindow", {
  extend: "Ext.window.Window",
  xtype: "postformwindow",
  title: "Add Post",
  height: 300,
  width: 400,
  autoShow: true,
  modal: true,
  items: [
    {
      xtype: "form",
      items: [
        {
          allowBlank: false,
          xtype: "textfield",
          fieldLabel: "Post ID",
          name: "postId",
          emptyText: "post id",
        },
        {
          allowBlank: false,
          xtype: "textfield",
          fieldLabel: "User ID",
          name: "userId",
          emptyText: "user id",
        },
        {
          allowBlank: false,
          xtype: "textfield",
          fieldLabel: "Title",
          name: "title",
          emptyText: "title",
        },
        {
          allowBlank: false,
          xtype: "datefield",
          fieldLabel: "Published Date",
          name: "date",
          emptyText: "date",
        },
      ],
    },
  ],
  buttons: [{ text: "Save" }, { text: "Cancel" }],
});
