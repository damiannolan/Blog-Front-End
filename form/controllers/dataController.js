angular.module('basic_framework').controller('resultsController', ['LogicLayer' , '$scope', '$location', function(LogicLayer, $scope, $location) {

    $scope.results = [];

    LogicLayer.getPeople().success(function(response){
        console.log(response);
        $scope.results = response;
    });

}]);
