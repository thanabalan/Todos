appModule.controller("TodosController", function ($scope, myService, $location, localStorageService, $http, $window) {
    $scope.todos = {}

     // Load Todo
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

     // Insert new Todo
    $scope.AddTodo = function () {
        if ($scope.todoTxt == "" || $scope.todoTxt == undefined) {
            alert("Enter the Todo Text");
            return;
        }
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
        alert("Todo added Successfully.");
        $scope.todoTxt = "";
        localStorageService.set("TodoCount", parseInt(TodoCount) + 1);
    }

    // Delete Todo
    $scope.delete = function (index) {
        if ($window.confirm("Are you sure want to delete this Todo?")) {
            var todoId = "Todo" + $scope.userid;
            $scope.todos.splice(index, 1);
            localStorageService.set(todoId, $scope.todos);
            alert("Deleted");
        }
    };

     // Change status of the Todo
    $scope.edit = function (index) {
        var todoId = "Todo" + $scope.userid;
        var data = $scope.todos;
        var isCompleted = data[index].completed;
        data[index].completed = !isCompleted;
        $scope.todos = data;
        localStorageService.set(todoId, $scope.todos);
    };
   
     // Return to User Page
    $scope.HomeClick = function () {
        $location.url("/");
    }

});
