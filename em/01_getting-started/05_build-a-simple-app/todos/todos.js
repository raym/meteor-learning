Todos = new Meteor.Collection('todos');

if (Meteor.isClient) {
  todosSub = Meteor.subscribe('todos');

  Template.TodosPanel.helpers({
    items: function() {
      return Todos.find({}, {
        sort: {
          created_at: -1
        }
      });
    }
  });

  Template.TodoItem.helpers({
    isDoneChecked: function() {
      return this.is_done ? 'checked' : '';
    },
    isDoneClass: function() {
      return this.is_done ? 'done' : '';
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

  Template.CreateTodoItem.events({
    'submit form': function(e, tmpl) {
      e.preventDefault();
      var subject = tmpl.find('input').value;
      Todos.insert({
        subject: subject,
        created_at: new Date,
        is_done: false
      });
      var form = tmpl.find('form');
      form.reset();
    }
  });

  Template.TodosCount.helpers({
    completedCount: function() {
      return Todos.find({is_done: true}).count();
    },
    totalCount: function() {
      return Todos.find({}).count();
    }
  });
}

if (Meteor.isServer) {
  Meteor.publish('todos', function() {
    return Todos.find();
  });
}
