Ext.define("MyApp.view.posts.PostFormWindow", {
  extend: "Ext.window.Window",
  xtype: "postformwindow",
  controller: "postformcontroller",
  title: "Add Post",
  height: 400,
  width: 400,
  bodyPadding: 10,
  autoShow: true,
  modal: true,
  modelValidation: true, 
  layout: 'anchor',
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
          name: "_id",
          emptyText: "post id",
          anchor    : '100%'
        },
        {
          allowBlank: false,
          xtype: "textfield",
          fieldLabel: "User ID",
          name: "userId",
          emptyText: "user id",
          anchor    : '90%'
        },
        {
          allowBlank: false,
          xtype: "textfield",
          fieldLabel: "Title",
          name: "title",
          emptyText: "title",
          anchor    : '80%'
        },
        {
          xtype     : 'textareafield',
          grow      : true,
          name      : 'body',
          fieldLabel: 'body',
          anchor    : '100%'
        },
        {
          xtype     : 'datefield',
          allowBlank: true,
          grow      : true,
          //name      : 'dob',
          fieldLabel: 'DOB',
          anchor    : '100%',
          maxValue: Ext.Date.add(new Date(), Ext.Date.YEAR, -18)
        },
      ],
    },
  ],
  buttons: [
    { text: "Save", handler: "onSaveClick" },
    { text: "Clear", handler: "onClearClick" },
  ],
});
