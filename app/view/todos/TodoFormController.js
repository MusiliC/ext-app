Ext.define("MyApp.view.todos.TodoFormController", {
  extend: "Ext.app.ViewController",
  alias: "controller.todoformcontroller",
  onSave: function (btn, e, eOptions) {
    let window = this.getView(); //window - get it through reference
    let form = window.getReferences()["todoform"].getForm();

    let todoId = window.getReferences()["todoIdField"].getValue();
    let url = "http://localhost:3000/todos";

    if (form.isValid()) {
      //send ajax request
      form.submit({
        method: todoId === "" ? "POST" : "PUT",
        url: todoId === "" ? url : `http://localhost:3000/todos/${todoId}`,
        submitEmptyText: false,
        success: function (form, action) {
          //add the record to the posts -> post grid
          Ext.Msg.alert("Success", action.result.msg);
          window.close();
        },
        failure: function (form, action) {
          //handle failure
          Ext.Msg.alert("Failed", action.result.msg);
        },
      });
    } else {
      Ext.Msg.alert("Invalid Data", "Please correct form errors.");
    }

    {
      success: true;
      msg: "Data submitted successfully";
    }
  },
});
