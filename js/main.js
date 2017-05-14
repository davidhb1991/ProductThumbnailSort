// Define a new module for the app and add the animation module as a dependency.
var app = angular.module('ProductThumbnailSort',['ngAnimate'])

.controller('MainCtrl', ['$scope', '$http', function($scope, $http){
   
    // Get the JSON file with the data and store it in products.
    $http.get('products/products.json').then(function(response){
        $scope.products = response.data;
    });
    // Change the default sort order to whatever button is active.
    $scope.myOrderBy = 'rating';
    // Create a function to change the sort order to whatever is passed in from the DOM.
    $scope.orderByMe = function(x) {
        $scope.myOrderBy = x;
        console.log('Accessed orderByMe and the user passed ' + x + ' as the property to sort by.');
    }
    // Change the state of the sort buttons when they are pressed.
    $('.button--sort-button').click(function(){
        $('.button--sort-button').removeClass('button--active');
        $(this).addClass('button--active');
    });

    console.log('Loaded MainCtrl');
 
}]);





// study below

angular.module('StackApp', []).controller('MainCtrl', function($scope) {
  'use strict';

  $scope.reverse = 'false';

  $scope.myList = [{
    id: 0,
    text: 'HTML5 Boilerplate'
  }, {
    id: 1,
    text: 'AngularJS'
  }, {
    id: 2,
    text: 'Karma'
  }, {
    id: 3,
    text: 'Hello'
  }, {
    id: 4,
    text: 'World'
  }, {
    id: 5,
    text: 'How'
  }];

  $scope.$watch('reverse', function() {
    $scope.setOrder();
  });

  $scope.setOrder = function() {

    if ($scope.reverse === 'random') {

      var t = [];

      for (var i = 0; i < $scope.myList.length; i++) {
        var r = Math.floor(Math.random() * $scope.myList.length);
        while (inArray(t, r)) {
          r = Math.floor(Math.random() * $scope.myList.length);
        }
        t.push(r);
        $scope.myList[i].order = r;
      }

    } else {

      for (var i = 0; i < $scope.myList.length; i++) {
        if ($scope.reverse === 'false') {
          $scope.myList[i].order = i;
        } else {
          $scope.myList[i].order = ($scope.myList.length - 1 - i);
        }
      }
    }
  };

  function inArray(a, value) {
    for (var i = 0; i < a.length; i++) {
      if (a[i] === value) {
        return true;
      }
    }
    return false;
  }

});

