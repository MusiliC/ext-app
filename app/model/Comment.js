Ext.define(
  "MyApp.model.Comment",
  {
    extend: "Ext.data.Model",
    require: ["MyApp.model.Post"],
    fields: [
      { name: "postId", reference: "Post", type: "int" },
      "id",
      "name",
      "email",
      "body",
    ],
    proxy: {
      type: "rest",
      url: "https://jsonplaceholder.typicode.com/comments",
      reader: { type: "json" },
    },
    validators: {
      postId: [
          'presence',
          { type: 'length', min: 7 },
          { type: 'exclusion', list: ['Bender'] }
      ]
  }
  },
  function () {
    //transverse
    MyApp.model.Post.load(1, {
      callback: function (post) {
        console.log("Post: " + post.get("title"));

        post.comments(function (comments) {
          comments.each(function (comment) {
            //console.log("Comment: " + comment.get("name") + comment.get("id"));
          });
        });
      },
    });

    MyApp.model.Comment.load(1, {
      callback: function (comment) {
        comment.getPost(function (post) {
          console.log("Got post from comment: " + post.get("title"));
        });
      },
    });
  }
);
