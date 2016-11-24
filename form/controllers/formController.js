angular.module('basic_framework').controller('formController', ['LogicLayer' , '$scope', '$location', function(LogicLayer, $scope, $location) {

    $scope.data = {
        firstName: "",
        surname: "",
        age: ""
    };

    $scope.results = [];

    $scope.init = function() {
        $scope.getAll();
    }

    $scope.getAll = function() {
        LogicLayer.getAllPeople().then(function(response){
            //success
            console.log("Success Get");
            console.log(LogicLayer.people);
            $scope.results = LogicLayer.people;
        }, function(error){
            //error
            console.log("error");
        });

    }

    $scope.submit = function(data) {
        LogicLayer.addPerson(data).then(function(response){
            //success
            console.log("Success Post");

            //Call $scope.getAll() to update the table
            $scope.getAll();

            //Clear the input fields
            $scope.data = {
                firstName: "",
                surname: "",
                age: ""
            };

        }, function(error){
            //error
            console.log("error");
        });
    }

    $scope.delete = function(result) {
        LogicLayer.delete(result).then(function(response){
            //success
            $scope.getAll();
        }, function(error){
           //error
        });
    }

    $scope.init();
}]);
