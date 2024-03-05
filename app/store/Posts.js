Ext.define("MyApp.store.Posts", {
  extend: "Ext.data.Store",
  alias: "store.posts",
  model: "MyApp.model.Post",
  require: ["MyApp.model.Post"],
  autoLoad: true,
  sorters: ["id", "title"],
  pageSize: 25
//   filters: {
//     property: 'userId',
//     value   : '10'
// }
});
