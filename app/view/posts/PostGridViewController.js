Ext.define("MyApp.view.posts.PostGridViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.postgridviewcontroller",
  mixins: ["MyApp.mixin.GridMixin"],
  init: function () {
    Ext.getStore("users").load();
  },
  onAddPostClicked: function (btn, e, eOptions) {
    var wd = Ext.create({
      xtype: "postformwindow",
      viewModel: {
        data: {
          newTitle: "Add new Post",
        },
      },
    });
    wd.show();
  },
  onFormFields: function (btn, e, eOptions) {
    Ext.create({
      xtype: "formfieldsdemo",
    });
  },
  onLayoutsClicked: function (btn, e, eOptions) {
    Ext.create({
      xtype: "checkoutform",
    });
  },
  onVTypesClicked: function (btn, e, eOptions) {
    Ext.create({
      xtype: "formfieldvtypevalidation",
    });
  },

  onEditClicked: function (btn, e, eOpts) {
    let record = this.getSelectedRecordByXType("postgrid");

    if (record) {
      Ext.create({
        xtype: "postformwindow",
        viewModel: {
          data: {
            newTitle: "Update Post",
            record: record,
          },
        },
      });
    } else {
      Ext.Msg.alert("Cancellation", "Alright. Thank you!!!");
    }
  },
  onSearchKeyValueChange: function (view, newValue, oldValue, eOpts) {
    let me = this,
      v = me.getView(),
      vm = me.getViewModel(),
      refs = me.getReferences();

    let store = v.getStore();

    store.reload({
      params: {
        userId: newValue,
      },
    });
  },

  onDeleteClicked: function (btn, e, eOpts) {
    let me = this;
    let record = this.getSelectedRecordByXType("postgrid");
    let grid = me.getView();

    // let grid = Ext.ComponentQuery.query("postgrid")[0];
    // let records = grid.getSelectionModel().getSelection();

    if (record) {
      let recordId = record.get("_id");
      Ext.Msg.confirm(
        "Delete Operation",
        `Are you sure you want to delete the post with id ${recordId}`,
        function (btn, text) {
          if (btn == "yes") {
            Ext.Ajax.request({
              url: `http://localhost:3000/posts/${recordId}`,
              method: "DELETE",
              success: function (response, opts) {
                var obj = Ext.decode(response.responseText);
                me.showToast("Operation successful");
                grid.getStore().reload();
              },

              failure: function (response, opts) {
                console.log(
                  "server-side failure with status code " + response.status
                );
              },
            });
          } else {
            Ext.Msg.alert("Cancellation", "Alright. Thank you!!!");
          }
        }
      );
    }
  },
  onUserSelectionChange: function (combo, newValue, oldValue, eOpts) {
    this.onFilterPosts(newValue);
  },
  onUserSelected: function (combo, record, eOPts) {
    this.onFilterPosts(combo.getValue());
  },
  onFilterPosts: function (newValue) {
    let me = this,
      v = me.getView(),
      vm = me.getViewModel(),
      refs = me.getReferences();

    let store = v.getStore();

    store.reload({
      params: {
        userId: newValue,
      },
    });
  },
  onPostGridCellClick: function (
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
    let postGrid = this.getView();
    let lowerPanel = Ext.ComponentQuery.query("postdetailstab")[0];

    if (postGrid.getHeight() === 400) {
      postGrid.setHeight(300);
      lowerPanel.setHeight(300);
      btn.setText("Hide Details");
    } else {
      postGrid.setHeight(400);
      lowerPanel.setHeight(0);
      btn.setText("Show Details");
    }
  },

  onSelectPost: function (id) {
    let me = this,
      grid = me.getView(),
      vm = me.getViewModel(),
      refs = me.getReferences();
    let record = grid.getStore().findRecord("_id", id);
    vm.set("record", record);
    grid.getSelectionModel().select(record);
  },
});
