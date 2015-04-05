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

  Template.TodoItem.events({
    'click [name=is_done]': function(e, tmpl) {
      var
        id = this._id,
        isDone = tmpl.find('input').checked
      ;
      Todos.update({_id: id}, {
        $set: {
          is_done: isDone
        }
      });
    }
  });
}

if (Meteor.isServer) {
}
