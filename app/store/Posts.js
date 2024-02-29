Ext.define("MyApp.store.Posts", {
  extend: "Ext.data.Store",
  alias: "store.posts",
  model: "Ext.data.Model",
  require: ["MyApp.model.Post"],
  autoLoad: true,
  sorters: ["id", "title"],
  filters: {
    property: 'userId',
    value   : '10'
}
});
