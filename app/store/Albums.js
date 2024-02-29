Ext.define("MyApp.store.Albums", {
    extend: 'Ext.data.Store',
    alias: 'store.albums',
    model: 'Ext.data.Model',
    require: ["MyApp.model.Album"],
    proxy: {
        // Ext.util.ObjectTemplate
        type: "rest",
        url: "https://jsonplaceholder.typicode.com/albums",
        reader: {
          type: "json",
        },
      },
    autoLoad: true
})