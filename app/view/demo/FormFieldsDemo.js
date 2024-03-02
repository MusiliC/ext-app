Ext.define("MyApp.view.demo.FormFieldsDemo", {
  extend: "Ext.window.Window",
  xtype: "formfieldsdemo",
  controller: "formfieldsdemocontroller",
  title: "Form Fields",
  height: 600,
  width: 600,
  autoShow: true,
  draggable: true,
  modal: true,
  items: [
    {
      xtype: "form",
      jsonSubmit: true,
      reference: "formdemo",
      defaults: {
        anchor: "90%",
      },
      items: [
        {
          boxLabel: "Remember me",
          xtype: "checkbox",
          name: "rememberMe",
          inputValue: "1",
        },
        {
          xtype: "combobox",
          name: "country",
          fieldLabel: "Choose country",
          store: { type: "countries" },
          valueField: "id",
          displayField: "value",
        },
        {
          xtype: "combobox",
          name: "postId",
          fieldLabel: "Posts",
          store: { type: "posts" },
          valueField: "id",
          displayField: "title",
        },
        {
          xtype: "datefield",
          fieldLabel: "From",
          format: "y-m-d",
          name: "from_date",
          maxValue: new Date(), // limited to the current date or prior
        },
        // {
        //   xtype: "filefield",
        //   name: "photo",
        //   fieldLabel: "Photo",
        //   labelWidth: 50,
        //   msgTarget: "side",
        //   allowBlank: false,
        //   buttonText: "Select Photo...",
        // },
        {
          xtype: "htmleditor",
          fieldLabel: "Body",
          name: "body",
          enableColors: false,
          enableAlignments: false,
        },
        {
          xtype: "numberfield",
          name: "goals",
          fieldLabel: "My goals this season",
          value: 2,
          maxValue: 29,
          minValue: 0,
          // Remove spinner buttons, and arrow key and mouse wheel listeners
          hideTrigger: true,
          keyNavEnabled: false,
          mouseWheelEnabled: false,
        },
        {
            xtype: 'radiogroup',
            fieldLabel: 'Programming Languages',
            name: 'language',
            defaults: {
                flex: 1
            },
            layout: 'hbox',
            items: [{
                boxLabel: 'JS',
                name: 'js',
                inputValue: false,
                //checked: true,
                id: 'radio1'
            }, {
                boxLabel: 'Node',
                name: 'node',
                inputValue: true,
                id: 'radio2'
            }]
        },
        {
            xtype: 'timefield',
            name: 'in',
            fieldLabel: 'Time In',
            minValue: '6:00 AM',
            maxValue: '8:00 PM',
            increment: 30,
          
        }
      ],
    },
  ],
  buttons: [
    {
      text: "Save",
      handler: "onSaveClick",
    },
  ],
});
