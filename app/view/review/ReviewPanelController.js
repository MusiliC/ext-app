Ext.define("MyApp.view.review.ReviewPanelController", {
  extend: "Ext.app.ViewController",
  alias: "controller.reviewpanelcontroller",
  onSearchKeyValueChange: function (view, newValue, oldValue, eOpts) {
    let me = this,
      v = me.getView(),
      vm = me.getViewModel(),
      refs = me.getReferences();

    let store = vm.getStore("dummyUsers");

    store.reload({
      params: {
        searchKey: newValue,
      },
    });
  },
});
