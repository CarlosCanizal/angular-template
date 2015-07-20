angular
.module('app')
.run(run);

run.$inject = ['$rootScope', '$state', '$timeout','$sce'];

function run($rootScope, $state, $timeout, $sce) {
  $timeout(function(){
    $rootScope.loaded = true;
  },500)
}

