Ext.define("MyApp.view.modelbinding.ModelBindingFormViewModel", {
  extend: "Ext.app.ViewModel",
  alias: "viewmodel.modelbindingformviewmodel",
  data: {
    firstName: null,
    lastName: null,
  },
  formulas: {
    // We'll explain formulas in more detail soon.
    name: function (get) {
      var fn = get("firstName"),
        ln = get("lastName");
      return fn && ln ? fn + " " + ln : fn || ln || "";
    },
  },
});
