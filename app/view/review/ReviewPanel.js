Ext.define("MyApp.view.review.ReviewPanel", {
  extend: "Ext.panel.Panel",
  xtype: "reviewpanel",
  viewModel: {
    type: 'reviewviewmodel'
  },
  items: [
    {
      xtype: "reviewgrid",
    },
  ],
});
