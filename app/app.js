var appModule = angular.module("myApp", ["ngRoute", "LocalStorageModule"]);

appModule.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        template: "https://thanabalan.github.io/Todos/Users.html" ,
    })
    .when("/Todos", {
        templateUrl: "https://thanabalan.github.io/Todos/Todos.html",
    })
   
});

var serviceBase = 'https://jsonplaceholder.typicode.com/';
