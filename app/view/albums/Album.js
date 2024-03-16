Ext.define("MyApp.view.albums.Albums", {
    extend: "Ext.panel.Panel",
    xtype: "albums",
    //height: 400,
    viewModel: {
      data: {
        record: null,
      },
    },
    items: [
      {
        xtype: "albumgrid",
      },
      //   {
      //     xtype: "userdetailstab",
      //   },
    ],
  });
  