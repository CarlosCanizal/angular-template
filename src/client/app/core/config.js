angular
.module('app')
.config(config);

config.$inject = ['$locationProvider', '$urlRouterProvider','$stateProvider'];

function config($locationProvider,$urlRouterProvider, $stateProvider) {

  // $locationProvider.html5Mode(true);
  $stateProvider
    .state('splash',{
      url:'/',
      templateUrl: 'app/splash/splash.template.html',
    })
    
  $urlRouterProvider.otherwise('/');
}