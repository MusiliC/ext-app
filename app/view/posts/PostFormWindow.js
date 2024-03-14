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
  layout: "anchor",
  viewModel: {
    data: {
      newTitle: null,
      record: null,
    },
  },
  bind: {
    title: "{newTitle}",
  },
  items: [
    {
      xtype: "form",
      reference: "postform",
      itemId: "postform",
      items: [
        {
          allowBlank: true,
          readOnly: true,
          xtype: "textfield",
          reference: "postId",
          fieldLabel: "Post ID",
          name: "_id",
          emptyText: "post id",
          anchor: "100%",
          bind: {
            value: "{record._id}",
          },
          readOnly: true,
        },
        {
          allowBlank: false,
          xtype: "textfield",
          fieldLabel: "User ID",
          name: "userId",
          emptyText: "user id",
          anchor: "100%",
          bind: {
            value: "{record.userId}",
          },
        },
        {
          allowBlank: false,
          xtype: "textfield",
          fieldLabel: "Title",
          name: "title",
          emptyText: "title",
          anchor: "100%",
          bind: {
            value: "{record.title}",
          },
        },
        {
          xtype: "textareafield",
          grow: true,
          name: "body",
          fieldLabel: "body",
          anchor: "100%",
          bind: {
            value: "{record.body}",
          },
        },
        // {
        //   xtype: "datefield",
        //   allowBlank: true,
        //   grow: true,
        //   //name      : 'dob',
        //   fieldLabel: "DOB",
        //   anchor: "100%",
        //   maxValue: Ext.Date.add(new Date(), Ext.Date.YEAR, -18),
        // },
      ],
    },
  ],
  buttons: [
    { text: "Save", formBind: true, handler: "onSaveClick" },
    { text: "Clear", handler: "onClearClick" },
  ],
});
