Ext.define(
  "MyApp.view.demo.CustomWindow",
  {
    extend: "Ext.window.Window",
    xtype: "customwindow",
    title: "Musili Ext js",
    height: 200,
    width: 400,
    autoShow: true,
    draggable: false,
    modal: true,
  },
 
);

// Ext.onReady(function() {
//   Ext.create("MyApp.view.demo.CustomWindow");
// });
