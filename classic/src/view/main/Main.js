/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define("MyApp.view.main.Main", {
  extend: "Ext.container.Container",
  xtype: "app-main",

  requires: [
    "Ext.window.MessageBox",
    "MyApp.view.main.MainController",
    "MyApp.view.main.MainModel",
  ],

  controller: "main",
  plugins: "viewport",
  viewModel: "main",

  layout: {
    type: "border",
  },
  items: [
    {
      xtype: "mainmenu",
      bind: {
        title: "{name}",
      },
      region: "west",
      width: 250,
      split: true,
      collapsible: true,
    },

    {
      region: "center",
      xtype: "mainpanel",
    },
    {
      region: "south",
      xtype: "appfooter",
    },
    {
      region: "north",
      xtype: "appheader",
    },
  ],
});
