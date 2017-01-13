angular.module('myApp')
  .controller('profileCtrl', function($scope, $state, mainService) {

    function loggedIn() {
      mainService.loggedIn().then(function(response) {
        if(response.data._id) {
          $scope.user = response.data;
        } else {
          $state.go('login');
        }
      })
    }

    loggedIn();


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
