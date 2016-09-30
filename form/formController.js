angular.module('basic_framework').controller('formController', ['$scope', function( $scope, LogicLayer) {

    var data;

    $scope.submit = function(data){
        console.log(data);
        this.data = data;
    };

}]);
