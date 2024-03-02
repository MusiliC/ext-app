Ext.define("MyApp.view.posts.PostFormWindow", {
  extend: "Ext.window.Window",
  xtype: "postformwindow",
  controller: "postformcontroller",
  title: "Add Post",
  height: 300,
  width: 400,
  bodyPadding: 10,
  autoShow: true,
  modal: true,
  items: [
    {
      xtype: "form",
      reference: "postform",
      itemId: 'postform',
      items: [
        {
          allowBlank: true,
          readOnly: true,
          xtype: "textfield",
          reference: "postId",
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
          xtype     : 'textareafield',
          grow      : true,
          name      : 'body',
          fieldLabel: 'body',
          anchor    : '100%'
        },
      ],
    },
  ],
  buttons: [
    { text: "Save", handler: "onSaveClick" },
    { text: "Clear", handler: "onClearClick" },
  ],
});
