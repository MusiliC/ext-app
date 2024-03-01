Ext.define("MyApp.view.albums.AlbumFormWindow", {
  extend: "Ext.window.Window",
  xtype: "albumformwindow",
  title: "Add Album",
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
          fieldLabel: "Album ID",
          name: "id",
          emptyText: "album id",
        },

        {
          allowBlank: false,
          xtype: "textfield",
          fieldLabel: "Title",
          name: "title",
          emptyText: "title",
        },
      ],
    },
  ],
  buttons: [{ text: "Submit" }, { text: "Cancel" }],
});
