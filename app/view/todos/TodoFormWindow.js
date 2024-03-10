Ext.define("MyApp.view.todos.TodoFormWindow", {
  extend: "Ext.window.Window",
  xtype: "todoformwindow",
  controller: "todoformcontroller",
  height: 300,
  width: 400,
  autoShow: true,
  layout: "fit",
  modal: true,
  viewModel: {
    data: {
      newTitle: null,
      record: null
    },
  },
  bind: {
    title: "{newTitle}",
  },
  items: [
    {
      xtype: "form",
      layout: "form",
      reference: "todoform",
      jsonSubmit: true,
      defaultType: "textfield",
      items: [
        {
          allowBlank: false,
          xtype: "textfield",
          fieldLabel: "User ID",
          name: "userId",
          emptyText: "user id",
          bind: {
            value: "{record.userId}",
          },
          readOnly: true,
        },
        {
          allowBlank: false,
          xtype: "textfield",
          fieldLabel: "Todo ID",
          reference: "todoIdField",
          name: "_id",
          emptyText: "todo id",
          bind: {
            value: "{record._id}",
          },
        },

        {
          fieldLabel: "Title",
          name: "title",
          emptyText: "title",
          bind: {
            value: "{record.title}",
          },
        },
        {
          xtype: "checkboxfield",
          fieldLabel: "Completed",
          name: "completed",
          boxLabel: "completed",
          bind: {
            value: "{record.completed}",
          },
        },
        {
          xtype: "textarea",          
          fieldLabel: "Comments",
          name: "comments",          
          bind: {
            hidden: "{!record.completed}",
          },
        },
      ],
      buttons: [
        {
          text: "Cancel",
        },
        {
          text: "Submit",
          formBind: "true",
          handler: "onSave",
        },
      ],
    },
  ],
});
