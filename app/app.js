var appModule = angular.module("myApp", ["ngRoute", "LocalStorageModule"]);
appModule.run(['$route', function($route)  {
  $route.reload();
}]);
appModule.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "https://thanabalan.github.io/Todos/Users.html" ,
    })
    .when("/Todos", {
        templateUrl: "https://thanabalan.github.io/Todos/Todos.html",
    })
   
});

var serviceBase = 'https://jsonplaceholder.typicode.com/';
