Ext.define("MyApp.model.Todo", {
    extend: "Ext.data.Model",
    idProperty: "id",
    fields: ["id", "userId", "title", "completed"],
    
  });