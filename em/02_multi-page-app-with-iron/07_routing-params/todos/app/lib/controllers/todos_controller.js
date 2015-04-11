TodosController = RouteController.extend({
  subscriptions: function () {
  },

  data: function () {
  },

  detail: function () {
    this.render('TodosDetail', { /* data: {} */});
  }
});
