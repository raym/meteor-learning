/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */


Meteor.publish('todos', function (/* args */) {
  return Todos.find({userId: this.userId});
});

Meteor.publish('todo', function (id) {
  return Todos.find({_id: id});
});

Meteor.publish('users', function (/* args */) {
  return Meteor.users.find({}, {fields: { profile: 1 }});
});

Meteor.publish('user', function (/* args */) {
  return User.find();
});
