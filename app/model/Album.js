Ext.define("MyApp.model.Album", {
    extend: "Ext.data.Model",
    idProperty: "id",
    fields: ["id", "userId", "title"],
    proxy: {
      // Ext.util.ObjectTemplate
      type: "rest",
      url: "https://jsonplaceholder.typicode.com/albums",
      reader: {
        type: "json",
      },
    },
    
  });