Ext.define("MyApp.store.Cities", {
  extend: "Ext.data.Store",
  alias: "store.cities",
  model: "MyApp.model.City",
  data: [
    { id: 1, name: "Kanairo", phone: "422424", age: 1963 },
    { id: 2, name: "Kitui", phone: "424", age: 2003 },
  ],
  proxy: {
    type: "",
  },
});
