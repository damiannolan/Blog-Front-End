angular.module('basic_framework').controller('resultsController', ['LogicLayer' , '$scope', '$location', function(LogicLayer, $scope, $location) {

    $scope.results = LogicLayer.getTasks().success(function(response){
        console.log(response);
        return response;
    });

}]);
