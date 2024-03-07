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
        },
        {
          allowBlank: false,
          xtype: "textfield",
          fieldLabel: "Todo ID",
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
