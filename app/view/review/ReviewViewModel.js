Ext.define("MyApp.view.review.ReviewViewModel",{
    extend:'Ext.app.ViewModel',
    alias: 'viewmodel.reviewviewmodel',

    stores:{
        posts:{
            model: 'MyApp.model.Post',
            autoLoad: true
        },
        users: {
            model: 'MyApp.model.User',
            autoLoad: true
        }
    }
})