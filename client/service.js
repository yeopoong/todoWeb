angular.module('todo').factory('todoStorage', function($http, $q) {

  var storage = {
    todos: [],
    
    get: function(callback) {
      $http.get('http://localhost:8080/api/todo')
        .then(function success(response) {
          console.log(response);
          callback(null, angular.copy(response.data, storage.todos));
        }, function error(err) {
          console.error(err);
          callback(err);
        });
    },

    add: function(todo) {
      var deferred = $q.defer();

      $http.post('http://localhost:8080/api/todo', {
          title: todo.title
        }).then(function success(response) {
          deferred.resolve(response.data);
        }, function (err) {
          console.error(err);
          deferred.reject(err);
        });

      return deferred.promise;
    },

    update: function(todo) {
      var deferred = $q.defer();

      $http.put('http://localhost:8080/api/todo/' + todo.id, todo)
        .then(function successs(response) {
          console.log(response);
        }, function error(err) {
          console.error(err);
        });

      return deferred.promise;
    },
    
    remove: function(todo) {
      var deferred = $q.defer();

      $http.delete('http://localhost:8080/api/todo/' + todo.id)
        .then(function successs(response) {
          storage.todos.splice(storage.todos.indexOf(todo), 1);
        }, function error(err) {
          console.error(err);
        });

      return deferred.promise;
    }
  }
  
  return storage;
});