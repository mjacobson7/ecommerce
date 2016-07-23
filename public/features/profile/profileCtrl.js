angular.module('myApp')
  .controller('profileCtrl', function($rootScope, $scope, $state) {

    $scope.user = $rootScope.user;

    $scope.updateInfo = function() {
      $state.go('updateprofile');
    }

  }); //end
