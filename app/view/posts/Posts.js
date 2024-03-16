Ext.define("MyApp.view.posts.Posts", {
  extend: "Ext.panel.Panel",
  xtype: "posts",
  //height: 400,
  viewModel: {
    data: {
      record: null,
    },
  },
  items: [
    {
      xtype: "postgrid",
    },
    //   {
    //     xtype: "userdetailstab",
    //   },
  ],
});
