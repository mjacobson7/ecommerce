angular.module('myApp')
  .directive('footerDirective', function() {
    return {
      restrict: 'E',
      templateUrl: './directives/footer/footer.html',
      scope: {},
      controller: function($scope) {}
    };
  }); //end
