/*****************************************************************************/
/* TodosDetail: Event Handlers */
/*****************************************************************************/
Template.TodosDetail.events({
});

/*****************************************************************************/
/* TodosDetail: Helpers */
/*****************************************************************************/
Template.TodosDetail.helpers({
  isMyTodo: function() {
    return this.userId === Meteor.userId();
  }
});

/*****************************************************************************/
/* TodosDetail: Lifecycle Hooks */
/*****************************************************************************/
Template.TodosDetail.created = function () {
};

Template.TodosDetail.rendered = function () {
};

Template.TodosDetail.destroyed = function () {
};
