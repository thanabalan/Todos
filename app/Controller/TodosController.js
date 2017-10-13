﻿appModule.controller("TodosController", function ($scope, myService, $location, localStorageService, $http) {
    $scope.todos = {}

    $scope.init = function () {
        $scope.userid = $location.absUrl().split('?userid=')[1];
       
        var todoId = "Todo" + $scope.userid;
        var data = localStorageService.get(todoId);
        if (!data) {
            $http.get(serviceBase + "todos?userId=" + $scope.userid).success(function (result) {
                data = result;
                localStorageService.set(todoId, data);
                $scope.todos = data;
            });
        }
        else {
            $scope.todos = data;
        }
        var TodoCount = localStorageService.get("TodoCount");
        if (!TodoCount) {
            var getAllTodos = myService.GetAllTodos($scope.userid);
            getAllTodos.then(function (d) {
                localStorageService.set("TodoCount", d.data.length);
            });
        }
    };

    $scope.AddTodo = function () {
        var TodoCount = localStorageService.get("TodoCount");
        var todoId = "Todo" + $scope.userid;
        var Todo = {
            userId: $scope.userid,
            id: parseInt(TodoCount) + 1,
            title: $scope.todoTxt,
            completed : true
        }
        getTodoss = myService.AddTodo(Todo);
        getTodoss.then(function (d) {
            var data = localStorageService.get(todoId);
            $scope.todos = data.concat(d.data);
            localStorageService.set(todoId, $scope.todos);
        });
        localStorageService.set("TodoCount", parseInt(TodoCount) + 1);
    }

    $scope.delete = function (index) {
        var todoId = "Todo" + $scope.userid;
        $scope.todos.splice(index, 1);
        localStorageService.set(todoId, $scope.todos);
    };

    $scope.edit = function (index) {
        var todoId = "Todo" + $scope.userid;
        var data = $scope.todos;
        var isCompleted = data[index].completed;
        data[index].completed = !isCompleted;
        $scope.todos = data;
        localStorageService.set(todoId, $scope.todos);
    };
   
    $scope.HomeClick = function () {
        $location.url("/");
    }

});