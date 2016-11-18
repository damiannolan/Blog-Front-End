angular.module('basic_framework').controller('loginController', ['LogicLayer' , '$scope', '$location', function(LogicLayer, $scope, $location) {

    $scope.login = function(){
        $location.path('app/form');
    }

}]);
