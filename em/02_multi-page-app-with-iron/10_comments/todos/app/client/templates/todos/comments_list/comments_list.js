/*****************************************************************************/
/* CommentsList: Event Handlers */
/*****************************************************************************/
Template.CommentsList.events({
  'submit form#new-comment': function(e, tmpl) {
    e.preventDefault();

    var todo = this;
    var body = tmpl.find('textarea[name=body]').value;
    var form = tmpl.find('form');

    Comments.insert({
      todoId: todo._id,
      createdAt: new Date,
      userId: Meteor.userId(),
      body: body
    });

    form.reset();
  }
});

/*****************************************************************************/
/* CommentsList: Helpers */
/*****************************************************************************/
Template.CommentsList.helpers({
  comments: function() {
    var todo = this;
    return Comments.find({todoId: todo._id}, {
      sort: {createdAt: -1}
    });
  },

  user: function() {
    var comment = this;
    return Meteor.users.findOne({_id: comment.userId});
  },

  timestamp: function() {
    var comment = this;
    return moment(comment.createdAt).fromNow();
  }
});

/*****************************************************************************/
/* CommentsList: Lifecycle Hooks */
/*****************************************************************************/
Template.CommentsList.created = function () {
};

Template.CommentsList.rendered = function () {
};

Template.CommentsList.destroyed = function () {
};
