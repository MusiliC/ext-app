Ext.define("MyApp.store.Todos", {
  extend: "Ext.data.Store",
  alias: "store.todos",
  model: "MyApp.model.Todo",
  require: ["MyApp.model.Todo"],
});
