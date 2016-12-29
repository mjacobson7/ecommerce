angular.module('myApp')
  .controller('profileCtrl', function($rootScope, $scope, $state, mainService) {



    $scope.updateInfo = function() {
      $state.go('updateprofile');
    }

    $scope.signOut = function() {
      console.log($rootScope.user._id);
      mainService.signOut().then(function(response) {
        console.log(response);
      })
    }

  }); //end
