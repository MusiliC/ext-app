Ext.define("MyApp.view.layouts.HboxVboxLayout", {
  extend: "Ext.window.Window",
  xtype: "hboxvboxlayout",
  title: "HboxVbox Layout",
  height: 600,
  width: 520,
  autoShow: true,
  draggable: false,
  modal: true,
  items: [
    {
      xtype: "panel",
      layout: 'hbox',
      items: [
        {
            xtype:'textfield',
            fieldLabel:'First Name'
        },
        {
            xtype: 'textfield',
            fieldLabel: 'Second Name'
        }
      ]
    },
    {
      xtype: "panel",
      layout: 'vbox',
      items: [
          {
              xtype: 'textfield',
              fieldLabel: 'First Name'
          },
          {
              xtype: 'textfield',
              fieldLabel: 'Second Name'
          }
      ]
    },
  ],
});
