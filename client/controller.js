angular.module('todo').controller('TodoCtrl', function ($scope, todoStorage) {
  
  todoStorage.get(function (err, todos) {
    if (err) return;
    $scope.todos = todos;
  });

  $scope.add = function(newTodoTitle) {
    if (!newTodoTitle) return;

    var newTodo = {
        title: newTodoTitle,
        completed: false,
        createAt: Date.now()
    };

    todoStorage.add(newTodo)
      .then(function (todo) {
        $scope.todos.push(todo);
        $scope.newTodo = null;
      });
  }
  
  $scope.update = function(todo) {
    todoStorage.update(todo);
  }
  
  $scope.remove = function (todo) {
    todoStorage.remove(todo);
  }
  
});
