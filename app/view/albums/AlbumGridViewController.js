Ext.define("MyApp.view.albums.AlbumGridViewController", {
    extend: "Ext.app.ViewController",
    alias: "controller.albumgridviewcontroller",
    onAddAlbumClicked: function (btn, e, eOptions) {
      console.log(btn.getText() + " was clicked");
      var wd = Ext.create({
        xtype: "albumformwindow",
      });
      wd.show();
    },
  });
  