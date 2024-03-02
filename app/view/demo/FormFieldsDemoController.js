Ext.define("MyApp.view.demo.FormFieldsDemoController",{
    extend:'Ext.app.ViewController',
    alias: 'controller.formfieldsdemocontroller',
    onSaveClick: function (btn, e, eOptions) {
        let window = this.getView();
        let ref = window.getReferences();
        let form = ref["formdemo"].getForm();
    
        if(form.isValid()){
            //send ajax request
            form.submit({
                method: 'POST',
                url: "https://jsonplaceholder.typicode.com/posts",
                success: function (form, action) {
                    //add the record to the posts -> post grid
                    Ext.Msg.alert('Success', action.result.msg);
                },
                failure: function (form, action) {
                    //handle failure
                    Ext.Msg.alert('Failed', action.result.msg);
                }
            })
        }else{
            Ext.Msg.alert('Invalid Data', 'Please correct form errors.')
        }
    
        {
            success: true
            msg: "Data submitted successfully"
        }
    }
})