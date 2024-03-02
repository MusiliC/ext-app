Ext.define("MyApp.store.Countries", {
  extend: "Ext.data.Store",
  alias: "store.countries",
  fields: ["id", "value"],
  data: [
    { id: "Kenya", value: "Kenya" },
    { id: "Tz", value: "Tz" },
    { id: "Ug", value: "Ug" },
    { id: "Rwanda", value: "Rwanda" },
  ],
});
