Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});

Router.route('/todos/:_id', {
  name: 'todos_detail',
  controller: 'TodosController',
  action: 'details',
  whiere: 'client'
});
