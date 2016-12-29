angular.module('myApp')
  .directive('jqueryDirective', function() {
    var linkFn;
    linkFn = function(scope, element, attrs) {

    $('#smallImage1').hover(function(){
        $('#image1').css('z-index', 1);

    },function(){
        $('#image1').css('z-index', 0);
    });

    $('#smallImage2').hover(function(){
      $('#image2').css('z-index', 1);

    },function(){
      $('#image2').css('z-index', 0);
    });

    $('#smallImage3').hover(function(){
      $('#image3').css('z-index', 1);

    },function(){
      $('#image3').css('z-index', 0);
    });

    $('#smallImage4').hover(function(){
      $('#image4').css('z-index', 1);

    },function(){
      $('#image4').css('z-index', 0);
    });
    }

    return {
      restrict: 'A',
      link: linkFn

    };
  }); //end
