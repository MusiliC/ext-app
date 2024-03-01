Ext.define("MyApp.model.Todo", {
    extend: "Ext.data.Model",
    idProperty: "id",
    fields: ["id", "userId", "title", "completed"],
   
    proxy: {
      // Ext.util.ObjectTemplate
      type: "rest",
      url: "https://jsonplaceholder.typicode.com/todos",
      reader: {
        type: "json",
      },
    },
    
  });