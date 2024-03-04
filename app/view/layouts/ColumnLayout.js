Ext.define("MyApp.view.layouts.ColumnLayout", {
  extend: "Ext.window.Window",
  xtype: "columnlayout",
  title: "Column Layout",
  height: 400,
  width: 800,
  autoShow: true,
  draggable: false,
  modal: true,

  items: [
    {
      xtype: "panel",
      layout: "column",
      items: [
        {
          title: "Post Form",
          columnWidth: 0.3,
          items: [
            {
              xtype: "container",
              items: [
                {
                  xtype: "form",
                  reference: "postform",
                  itemId: "postform",
                  items: [
                    {
                      allowBlank: true,
                      readOnly: true,
                      xtype: "textfield",
                      reference: "postId",
                      fieldLabel: "Post ID",
                      name: "postId",
                      emptyText: "post id",
                      anchor: "100%",
                    },
                    {
                      allowBlank: false,
                      xtype: "textfield",
                      fieldLabel: "User ID",
                      name: "userId",
                      emptyText: "user id",
                      anchor: "100%",
                    },
                    {
                      allowBlank: false,
                      xtype: "textfield",
                      fieldLabel: "Title",
                      name: "title",
                      emptyText: "title",
                      anchor: "100%",
                    },
                    {
                      xtype: "textareafield",
                      grow: true,
                      name: "body",
                      fieldLabel: "body",
                      anchor: "100%",
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          title: "Todo Form",
          columnWidth: 0.4,
          items: [
            {
              xtype: "container",
              items: [
                {
                  allowBlank: false,
                  xtype: "textfield",
                  fieldLabel: "User ID",
                  name: "userId",
                  emptyText: "user id",
                },
                {
                  allowBlank: false,
                  xtype: "textfield",
                  fieldLabel: "Todo ID",
                  name: "id",
                  emptyText: "todo id",
                },
        
                {
                  allowBlank: false,
                  xtype: "textfield",
                  fieldLabel: "Title",
                  name: "title",
                  emptyText: "title",
                },
                {
                  allowBlank: false,
                  xtype: "checkboxfield",
                  fieldLabel: " Completed",
                  name: "completed",
                  boxLabel: "completed",
                },
              ],
            },
          ],
        },
        {
          title: "Album Form",
          columnWidth: 0.3,
          items:[
            {
              xtype: 'container',
              items: [
                {
                  allowBlank: false,
                  xtype: "textfield",
                  fieldLabel: "User ID",
                  name: "userId",
                  emptyText: "user id",
                },
                {
                  allowBlank: false,
                  xtype: "textfield",
                  fieldLabel: "Album ID",
                  name: "id",
                  emptyText: "album id",
                },
        
                {
                  allowBlank: false,
                  xtype: "textfield",
                  fieldLabel: "Title",
                  name: "title",
                  emptyText: "title",
                },
              ],
            }
          ]
        },
      ],
    },
  ],
});
