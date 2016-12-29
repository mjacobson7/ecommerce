angular.module('myApp')
  .controller('loginCtrl', function($rootScope, $scope, mainService, $state, alertify, $location) {


    $scope.signUp = function(email, name, password1, password2) {

      if(!email && !name && !password1 && !password2) {
        alertify.delay(5000).logPosition('bottom right').error('Please fill out form');
      } else if(password1 !== password2) {
        alertify.delay(5000).logPosition('bottom right').error('Password do not match');
      } else if(!email) {
        alertify.delay(5000).logPosition('bottom right').error('Please enter a valid email');
      } else if(!name) {
        alertify.delay(5000).logPosition('bottom right').error('Please enter your name');
      } else if(!password1 || !password2) {
        alertify.delay(5000).logPosition('bottom right').error('Please enter a password');
      } else {
        var userSignUpInfo = {
          name: name,
          email: email,
          password: password1,
          role: 'user'
        };
        mainService.signUp(userSignUpInfo).then(function(response) {
          $scope.email = '';
          $scope.name = '';
          $scope.password1 = '';
          $scope.password2 = '';
        });
      };
    };


    $scope.logIn = function(email, password) {
      if(!email && !password) {
        alertify.delay(5000).logPosition('bottom right').error('Please fill out form');
      } else if(!email) {
        alertify.delay(5000).logPosition('bottom right').error('Please enter a valid email');
      } else if(!password) {
        alertify.delay(5000).logPosition('bottom right').error('Please enter a password');
      } else {
      var loginCredentials = {
        email: email,
        password: password
      };
      mainService.logIn(loginCredentials).then(function(response) {
        $scope.email = '';
        $scope.password = '';
        if(response.data !== "Failed to authenticate") {
        $rootScope.user = response.data;
        $scope.user = response.data;
        $state.go('shop');
        alertify.delay(5000).logPosition('bottom right').success('Welcome back ' + $rootScope.user.name + '!');
      } else {
        alertify.delay(5000).logPosition('bottom right').error('Incorrect username or password!');
      }
      })
    };
  };
  }); //end
