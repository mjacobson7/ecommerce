angular.module('myApp')
  .controller('adminCtrl', function($rootScope, $scope, mainService) {

    $scope.addProduct = function(title, price, description, image1, image2, image3, image4) {
      var newProduct = {
        title: title,
        price: price,
        description: description,
        image1: image1,
        image2: image2,
        image3: image3,
        image4: image4
      };
      mainService.addProduct(newProduct).then(function(response) {
        $scope.title = '';
        $scope.price = '';
        $scope.image1 = '';
        $scope.image2 = '';
        $scope.image3 = '';
        $scope.image4 = '';
        $scope.description = '';
      });
    };


    $scope.choices = [{id: 'choice1'}];

  $scope.addNewChoice = function() {
    var newItemNo = $scope.choices.length+1;
    $scope.choices.push({'id':'choice'+newItemNo});
  };

  $scope.removeChoice = function() {
    var lastItem = $scope.choices.length-1;
    $scope.choices.splice(lastItem);
  };

  }); //end
