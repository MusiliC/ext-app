Ext.define("MyApp.view.todos.Todos", {
    extend: "Ext.panel.Panel",
    xtype: "todos",
    height: 400,
    viewModel: {
      data: {
        record: null,
      },
    },
    items: [
      {
        xtype: "todogrid",
      },
      //   {
      //     xtype: "userdetailstab",
      //   },
    ],
  });
  