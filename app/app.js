var appModule = angular.module("myApp", ["ngRoute", "LocalStorageModule"]);

appModule.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl: "/Users.html"
    })
    .when("/Todos", {
        templateUrl: "/Todos.html",
    })
   
});

var serviceBase = 'https://jsonplaceholder.typicode.com/';