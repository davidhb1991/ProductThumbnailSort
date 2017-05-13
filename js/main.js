var app = angular.module('ProductThumbnailSort',[])

.controller('MainCtrl', ['$scope', '$http', function($scope, $http){
   
    // Get the JSON file with the data and store it in products
    $http.get('products/products.json').then(function(response){
        $scope.products = response.data;
    });

    console.log('Loaded the Main Controller ' + $scope);
 
}]);