/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */


Meteor.publish('todos', function (/* args */) {
  if (!this.userId) return this.ready();
  return Todos.find({userId: this.userId});
});

Meteor.publish('todo', function (id) {
  if (!this.userId) return this.ready();
  var todo = Todos.findOne({_id: id});
  return [
    Todos.find({_id: id}),
    Meteor.users.find({_id: todo.userId}, {fields: {profile: 1}}),
    Comments.find({todoId: id}, {sort: {createdAt: -1}})
  ];
});

Meteor.publish('users', function (/* args */) {
  if (!this.userId) return this.ready();
  return Meteor.users.find({}, {fields: { profile: 1 }});
});

Meteor.publish('user', function (userId) {
  if (!this.userId) return this.ready();
  return [
    Meteor.users.find({_id: userId}, {fields: {profile: 1}}),
    Todos.find({userId: userId})
  ];
});
