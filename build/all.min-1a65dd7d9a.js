function run(e,n,t,a){t(function(){e.loaded=!0},500)}function config(e,n,t){t.state("index",{url:"/",templateUrl:"app/index/index.template.html"}),n.otherwise("/")}!function(){"use strict";angular.module("app",["ngResource","ngAnimate","app.core"])}(),function(){"use strict";angular.module("app.core",["ui.router"])}(),angular.module("app").run(run),run.$inject=["$rootScope","$state","$timeout","$sce"],angular.module("app").config(config),config.$inject=["$locationProvider","$urlRouterProvider","$stateProvider"],angular.module("app.core").run(["$templateCache",function(e){e.put("app/index/index.template.html",'<div data-ng-class="{\'display-block\':loaded}" class="main display-none"><div><img src=http://www.supergraphictees.com/wp-content/uploads/2013/01/DARKNIGHT-WHITE01.jpg></div></div>')}]);