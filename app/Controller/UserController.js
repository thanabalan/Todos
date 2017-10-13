appModule.controller("UserController", function ($scope, myService, $location) {
    var gettUsers = myService.GetUsers();
    gettUsers.then(function (d) {
        $scope.users = d.data;
    });

    $scope.TodoClick = function (id) {
        $location.path("/Todos").search("userid", id);
    }

});