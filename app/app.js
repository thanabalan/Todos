var appModule = angular.module("myApp", ["ngRoute", "LocalStorageModule"]);

appModule.config(function ($routeProvider) {
    $routeProvider
    .when("/", {
        template: '<div class="content" ng-controller="UserController"> <h3 class="page-header"><b>User Cards</b></h3> <div class="row" ><div ng-repeat="User in users">         <div ng-class="{ 'row': ($index + 1) % 4 == 0 }"> <div class="col-sm-3"> <h3><strong>{{ User.name }} </strong></h3>    <p><b>Email</b> : {{  User.email }}</p>                        <p><b>Phone</b> : {{  User.phone }}</p>   <p><b>website</b> : {{  User.website }}</p>  <p><b>Company Name</b> : {{  User.company.name }}</p>                        <div class="col-sm-12 text-right">   <a ng-click="TodoClick(User.id)" style="cursor:pointer; font-weight:bold">View Todos</a>  </div> </div>    </div> </div>   </div> </div></div>'    ,
    })
    .when("/Todos", {
        templateUrl: "https://thanabalan.github.io/Todos/Todos.html",
    })
   
});

var serviceBase = 'https://jsonplaceholder.typicode.com/';
