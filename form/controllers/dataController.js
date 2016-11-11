angular.module('basic_framework').controller('resultsController', ['LogicLayer' , '$scope', '$location', function(LogicLayer, $scope, $location) {

    $scope.results = LogicLayer.getPeople().success(function(response){
        var json_data = response.people;
        var result = [];

        for(var i in json_data)
            result.push([i, json_data [i]]);

        console.log(result);
        return result;
    });
}]);
