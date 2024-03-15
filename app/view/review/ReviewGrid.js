Ext.define("MyApp.view.review.ReviewGrid", {
  extend: "Ext.grid.Panel",
  xtype: "reviewgrid",
  controller: "reviewpanelcontroller",
  requires: ["MyApp.util.Util"],
  // store:
  bind: "{dummyUsers}",
  tbar: [
    {
      text: 'Operations',
      menu:[
        {
            text:'Add new User',
            handler:function(){
                
            }
        },
        {
            text: 'Add new User'
        },
        {
            text: 'Add new User',
            menu:[
                {
                 text:'Nested Sub Menu'
                }
            ]
        }
    ]
    },
    {
      text: "Add user",
    },
    {
      fieldLabel: "Search",
      xtype: "textfield",
      listeners: {
        change: "onSearchKeyValueChange",
      },
    },
    {
      xtype: "datefield",
      emptyText: "StartDate",
    },
  ],
  columns: [
    { xtype: "rownumberer" },
    {
      dataIndex: "_id",
      text: "ID",
    },
    {
      dataIndex: "username",
      text: "Username",
      flex: 2,
      editor: "textfield",
    },
    {
      dataIndex: "email",
      text: "Email",
      flex: 3,
      renderer: function (value) {
        return Ext.String.format('<a href="mailto:{0}">{1}</a>', value, value);
      },
      editor: {
        xtype: "textfield",
        completeOnEnter: false,
        allowBlank: false,
      },
    },
    {
      dataIndex: "city",
      text: "City",
      flex: 2,
    },
    {
      text: "Price",
      dataIndex: "price",
      flex: 2,
      renderer: MyApp.util.Util.formatNumber,
    },
  ],
});
