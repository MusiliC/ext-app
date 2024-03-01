Ext.define("MyApp.store.Albums", {
    extend: 'Ext.data.Store',
    alias: 'store.albums',
    model: 'MyApp.model.Album',
    require: ["MyApp.model.Album"],
   
    autoLoad: true
})