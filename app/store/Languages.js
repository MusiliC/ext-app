Ext.define("MyApp.store.Languages", {
  extend: "Ext.data.Store",
  alias: "store.languages",
  fields: ["id", "value"],
  data: [
    { id: "JS", inputValue: "JS", boxLabel: "Js", name: "js" },
    { id: "React", value: "React", boxLabel: "React", name: "React" },
    { id: "Node", value: "Node", boxLabel: "Node", name: "Node" },
  ],
});


