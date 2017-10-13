appModule.service("myService", function ($http) {

    // Get Users data
    this.GetUsers = function () {
        var response = $http({
            method: "get",
            url: serviceBase + "users"
        });
        return response;
    }

    // Get All Todos
    this.GetAllTodos = function (userid) {
        var response = $http({
            method: "get",
            url: serviceBase + "todos"
        });
        return response;
    }

    // Get Todos by UserID 
    this.GetTodos = function (userid) {
        var response = $http({
            method: "get",
            url: serviceBase + "todos?userId=" + userid
        });
        return response;
    }

    // Insert Todo 
    this.AddTodo = function (Todo) {
        var response = $http({
            method: "post",
            url: serviceBase + "todos",
            data: Todo
        });
        return response;
    }

});