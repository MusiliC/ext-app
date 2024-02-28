Ext.define(
  //className = <AppName>.<foldername>.<ClassAndFileName>
  "MyApp.model.City",
  //configuration
  {
    extend: "Ext.data.Model",
    fields: [
      "id",
      "name",
      { name: "phone", type: "string" },
      { name: "age", type: "int", convert: null },
    ],
  },
  //callback function
  function () {
    let city = Ext.create("MyApp.model.City");
    console.log(city);
    console.log("On city model");
  }
);
