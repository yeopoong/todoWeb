angular.module('todo').directive('todoTitle', function() {
  return {
    template: '<h1>TODO LIST</h1>'
  }
});

angular.module('todo').directive('todoItem', function() {
  return {
    templateUrl: 'todoItem.html'
  }
});

angular.module('todo').directive('todoFilters', function() {
  return {
    templateUrl: 'todoFilters.html'
  }
});

angular.module('todo').directive('todoForm', function() {
  return {
    templateUrl: 'todoForm.html'
  }
});
