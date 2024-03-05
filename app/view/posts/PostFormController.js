Ext.define("MyApp.view.posts.PostFormController", {
  extend: "Ext.app.ViewController",
  alias: "controller.postformcontroller",
  init: function () {},
  onClearClick: function (btn, e, eOpts) {
    //get all fields
    //reset
  },
  onSaveClick: function (btn, e, eOpts) {
    //get all values
    //submit json placeholder - backend
    //add items to the grid
    let window = this.getView();
    let ref = window.getReferences();
    let form = ref["postform"].getForm();

    if(form.isValid()){
        //send ajax request
        form.submit({
            method: 'POST',
            url: "http://localhost:3000/posts",
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
  },
});
