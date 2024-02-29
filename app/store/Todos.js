Ext.define("MyApp.store.Todos", {
    extend: 'Ext.data.Store',
    alias: 'store.todos',
    model: 'Ext.data.Model',
    require: ["MyApp.model.Todo"],
    proxy: {
        // Ext.util.ObjectTemplate
        type: "rest",
        url: "https://jsonplaceholder.typicode.com/todos",
        reader: {
          type: "json",
        },
      },
    autoLoad: true
})