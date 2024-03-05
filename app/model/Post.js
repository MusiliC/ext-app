Ext.define("MyApp.model.Post", {
  extend: "Ext.data.Model",
  idProperty: "_id",
  fields: ["_id", "userId", "title", "body"],
  proxy: {
    // Ext.util.ObjectTemplate
    type: "rest",
    url: "http://localhost:3000/posts",
    reader: {
      type: "json",
      rootProperty:"rows",
      totalProperty: "totalCount"
    },
  },
  
});
