Ext.define("MyApp.store.Posts", {
  extend: "Ext.data.Store",
  alias: "store.posts",
  model: "MyApp.model.Post",
  require: ["MyApp.model.Post"], 
  sorters: ["id", "title"],
  pageSize: 25,
  //autoLoad: true
});
