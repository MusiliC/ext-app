Ext.define("MyApp.view.todos.TodoFormWindow", {
  extend: "Ext.window.Window",
  xtype: "todoformwindow",
  title: "Add Todo",
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
          fieldLabel: "User ID",
          name: "userId",
          emptyText: "user id",
        },
        {
          allowBlank: false,
          xtype: "textfield",
          fieldLabel: "Todo ID",
          name: "id",
          emptyText: "todo id",
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
          xtype: "checkboxfield",
          fieldLabel: " Completed",
          name: "completed",
          boxLabel: "completed",
        },
      ],
    },
  ],
  buttons: [{ text: "Submit" }, { text: "Cancel" }],
});
