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
  
 
}]);

   



/*
// ordering the list without removing elements and adding them back in so it can be animated.
// HTML

 <input type="button" 
 ng-click="reverse = 'random';setOrder()"
  value="setOrder()">
   
    <ul id="list" 
    ng-style="{height: ((myList.length * 40) + 'px')}">

      <li ng-repeat="item in myList" 
      ng-style="{top: ((item.order * 40) + 'px')}">

      {{$index}} - {{item.order}}. {{item.text}}

      </li>
    
    </ul>

// JS

  $scope.$watch('DOMObjectThatWillChange', function() {
    $scope.setOrder();
  });
//
  $scope.setOrder = function() {
      for (var i = 0; i < $scope.myList.length; i++) {     
          $scope.myList[i].order = ($scope.myList.length - 1 - i);
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
*/


