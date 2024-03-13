Ext.define("MyApp.view.posts.PostGridViewController", {
  extend: "Ext.app.ViewController",
  alias: "controller.postgridviewcontroller",
  mixin:['MyApp.mixin.GridMixin'], 
  onAddPostClicked: function (btn, e, eOptions) {
    var wd = Ext.create({
      xtype: "postformwindow",
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
  
  onEditClicked: function (btn, e, eOpts) {},
  onDeleteClicked: function (btn, e, eOpts) {

    let me=this;
    let record = this.getSelectedRecordByXType('postgrid');
    let grid = me.getView()

    // let grid = Ext.ComponentQuery.query("postgrid")[0];
    // let records = grid.getSelectionModel().getSelection();

    if (record) {
      let recordId = records[0].get("_id");
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
});
