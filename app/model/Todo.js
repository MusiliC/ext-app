Ext.define("MyApp.model.Todo", {
    extend: "Ext.data.Model",
    idProperty: "_id",
    fields: ["_id", "userId", "title", "completed"],
    proxy: {
      // Ext.util.ObjectTemplate
      type: "rest",
      url: "http://localhost:3000/todos",
      reader: {
        type: 'json',
        rootProperty: 'rows',
        totalProperty: 'totalCount'
      },
    },
    
  });