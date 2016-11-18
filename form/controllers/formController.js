angular.module('basic_framework').controller('formController', ['LogicLayer' , '$scope', '$location', function(LogicLayer, $scope, $location) {

    $scope.data = {
        firstName: "",
        surname: "",
        age: ""
    };

    $scope.submit = function(data){
        console.log(data);
        LogicLayer.postPerson(data).success(function(){
            $location.path('data');
        });
    };
    
}]);
