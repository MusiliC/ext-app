Ext.define("MyApp.view.users.UserGridController", {
  extend: "Ext.app.ViewController",
  alias: "controller.usergridcontroller",
  init: function () {
    let grid = this.getView(),
      store = grid.getStore();
    store.load();
  },
  onUserGridCellClick: function (
    grid,
    td,
    cellIndex,
    record,
    tr,
    rowIndex,
    e,
    eOpts
  ) {
    let me = this,
      view = me.getView(),
      vm = me.getViewModel(),
      refs = me.getReferences();
    vm.set("record", record);
  },
  onShowDetails: function (btn, e, eOpts) {
    let userGrid = this.getView();
    let lowerPanel = Ext.ComponentQuery.query("userdetailstab")[0];
    if (userGrid.getHeight() === 600) {
      userGrid.setHeight(300);
      lowerPanel.setHeight(300);
      btn.setText("Hide Details");
    } else {
      userGrid.setHeight(600);
      lowerPanel.setHeight(0);
      btn.setText("Show Details");
    }
  },

  onUserGridCellDblClick: function (
    grid,
    td,
    cellIndex,
    record,
    tr,
    rowIndex,
    e,
    eOpts
  ) {
    record.get("username");
  },
  onUserGridCellContextMenu: function (
    grid,
    td,
    cellIndex,
    record,
    tr,
    rowIndex,
    e,
    eOpts
  ) {},
  onModelBinding: function (btn, e, eOpts) {
    Ext.create({
      xtype: "modelbindingform",
    });
  },
  onShowGrouping: function (btn, e, eOpts) {
    Ext.create({
      xtype: "modelbindingform",
    });
  },
  onSelectUser: function (id) {
    let me = this,
      grid = me.getView(),
      vm = me.getViewModel(),
      refs = me.getReferences();
    let record = grid.getStore().findRecord("_id", id);
    vm.set("record", record);
    grid.getSelectionModel().select(record);
  },
});
