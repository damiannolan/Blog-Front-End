angular.module('basic_framework').controller('formController', ['LogicLayer' , '$scope', '$location', function(LogicLayer, $scope, $location) {

    $scope.submit = function(data){
        LogicLayer.postTask(data);
        $location.path('results');
    }

}]);
