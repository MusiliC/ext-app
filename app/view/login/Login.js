Ext.define("MyApp.view.login.Login", {
  extend: "Ext.window.Window",
  xtype: "login",
  requires: ["MyApp.view.login.LoginController", "Ext.form.Panel"],
  controller: "login",
  bodyPadding: 10,
  title: "Login Window",
  closable: false,
  autoShow: true,
  draggable: false,
  resizable: false,
  layout: "fit",
  items: {
    xtype: "form",
    reference: "form",
    defaults: {
      afterLabelTextTpl: MyApp.util.Util.required,
    },
    items: [
      {
        xtype: "form",
        reference: "loginform",
        itemId: "loginform",
        items: [
          {
            xtype: "textfield",
            name: "email",
            fieldLabel: translations.user,
            allowBlank: false,
          },
          {
            xtype: "textfield",
            name: "password",
            inputType: "password",
            fieldLabel: translations.password,
            vtype: "customPass",
            allowBlank: false,
          },
          {
            xtype: "displayfield",
            afterLabelTextTpl: "",
            hideEmptyLabel: false,
            value: "Enter any non-blank password",
          },
          //   {
          //     xtype:'datefield',
          //     fieldLabel:'Date'
          // },
        ],
      },
    ],
  },

  buttons: [
    {
      xtype: "splitbutton",
      reference: "lng-btn",
      menu: {
        xtype: "menu",
        defaults: {
          listeners: {
            click: "onMenuItemClick",
          },
        },
        items: [
          {
            xtype: "menuitem",
            iconCls: "en",
            text: "English",
          },
          {
            xtype: "menuitem",
            iconCls: "es",
            text: "Español",
          },

          {
            xtype: "menuitem",
            iconCls: "fr",
            text: "France",
          },
        ],
      },
    },
    "->",

    {
      text: translations.login,
      formBind: true,
      listeners: {
        click: "onLoginClick",
      },
    },
  ],
});
