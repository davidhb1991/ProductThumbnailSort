var app = angular.module('ProductThumbnailSort',[])

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