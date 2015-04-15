/*****************************************************************************/
/* TodosCount: Event Handlers */
/*****************************************************************************/
Template.TodosCount.events({
});

/*****************************************************************************/
/* TodosCount: Helpers */
/*****************************************************************************/
Template.TodosCount.helpers({
  completedCount: function() {
    return Todos.find({isDone: true}).count();
  },

  totalCount: function() {
    return Todos.find().count();
  }
});

/*****************************************************************************/
/* TodosCount: Lifecycle Hooks */
/*****************************************************************************/
Template.TodosCount.created = function () {
};

Template.TodosCount.rendered = function () {
};

Template.TodosCount.destroyed = function () {
};
