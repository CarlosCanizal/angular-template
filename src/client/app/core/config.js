angular
.module('app')
.config(config);

config.$inject = ['$locationProvider', '$urlRouterProvider','$stateProvider'];

function config($locationProvider,$urlRouterProvider, $stateProvider) {

  // $locationProvider.html5Mode(true);
  $stateProvider
    .state('index',{
      url:'/',
      templateUrl : 'app/index/index.template.html' 
    })
    
  $urlRouterProvider.otherwise('/');
}