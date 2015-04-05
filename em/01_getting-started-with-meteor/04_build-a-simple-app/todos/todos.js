Todos = new Meteor.Collection('todos');

if (Meteor.isClient) {
  Template.TodosPanel.helpers({
    items: function() {
      return Todos.find();
    }
  });

  Template.TodoItem.helpers({
    isDoneChecked: function() {
      return this.is_done ? 'checked' : '';
    }
  });
}

if (Meteor.isServer) {
}
