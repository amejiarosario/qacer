Todos = new Meteor.Collection("todos");

if (Meteor.is_client) {
  Template.todo_items.todos = function(){
    return Todos.find();
  }
}

if (Meteor.is_server) {
  Meteor.publish('todos', function(){
    return Todos.find();
  });

  Meteor.startup(function () {
    // code to run on server at startup
  });
}