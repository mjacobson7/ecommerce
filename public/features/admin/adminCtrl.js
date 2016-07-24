angular.module('myApp')
  .controller('adminCtrl', function($rootScope, $scope, mainService, alertify) {

    $scope.addProduct = function(title, price, description, image1, image2, image3, image4) {
      if(isNaN(price) || !title || !price || !description || !image1 || !image2 || !image3 || !image4) {
        alertify.delay(5000).logPosition('bottom right').error('Invalid Inputs');
      } else {
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
    };


    $scope.choices = [{inputId: 'choice1'}];

  $scope.addNewChoice = function() {
    for(var i = 0; i < $scope.choices.length; i++) {
      if($scope.choices[i].inputId === "choice5") {
         return alertify.delay(5000).logPosition('bottom right').error('You cannot add any more fields!');
      }
    }
        var newItemNo = $scope.choices.length+1;
        $scope.choices.push({'inputId':'choice'+newItemNo});
  };

  $scope.removeChoice = function() {
    var lastItem = $scope.choices.length-1;
    $scope.choices.splice(lastItem);
  };


  $scope.deleteMultipleProducts = function(idArr) {
    console.log(idArr[0].productId)
    if(!idArr[0].productId) {
      alertify.delay(5000).logPosition('bottom right').error('Please enter a product ID');
    } else {
    for(var i = 0; i < idArr.length; i++) {
      var idObject = {
        id: idArr[i].productId
      }
      mainService.deleteProduct(idObject.id).then(function(response) {
        console.log(response);
      });
    };
  };
};


  }); //end
