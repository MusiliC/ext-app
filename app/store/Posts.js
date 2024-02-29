Ext.define("MyApp.store.Posts", {
    extend: 'Ext.data.Store',
    alias: 'store.posts',
    model: 'Ext.data.Model',
    require: ["MyApp.model.Post"],
    proxy: {
        // Ext.util.ObjectTemplate
        type: "rest",
        url: "https://jsonplaceholder.typicode.com/posts",
        reader: {
          type: "json",
        },
      },
    autoLoad: true
})