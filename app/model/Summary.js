Ext.define("MyApp.model.Summary",{
    extend: "Ext.data.Model",
    fields: ['student', {
        name: 'mark',
        type: 'int'
    }]
})