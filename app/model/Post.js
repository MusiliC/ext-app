Ext.define("MyApp.model.Post", {
  extend: "Ext.data.Model",
  idProperty: "id",
  fields: ["id", "userId", "title", "body"],
  proxy: {
    // Ext.util.ObjectTemplate
    type: "rest",
    url: "https://jsonplaceholder.typicode.com/posts",
    reader: {
      type: "json",
    },
  },
  
});
