angular.module('basic_framework').controller('formController', ['$scope', 'LogicLayer', function( $scope, LogicLayer) {

    LogicLayer.getTasks().success(function(response){
        console.log(response);
    });

}]);
