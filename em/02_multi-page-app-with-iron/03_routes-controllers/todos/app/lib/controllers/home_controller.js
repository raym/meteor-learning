dep = new Tracker.Dependency;
HomeController = RouteController.extend({
  layoutTemplate: 'MasterLayout',

  subscriptions: function() {
  },

  action: function() {
    dep.depend();
    console.log('action');
    this.render('Home');
  }
});
