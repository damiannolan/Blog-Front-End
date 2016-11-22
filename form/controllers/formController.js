angular.module('basic_framework').controller('formController', ['LogicLayer' , '$scope', '$location', function(LogicLayer, $scope, $location) {

    $scope.data = {
        firstName: "",
        surname: "",
        age: ""
    };

    $scope.results = [];

    $scope.submit = function(data) {
        LogicLayer.addPerson(data).then(function(response){
            //success
            console.log("success");

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

    $scope.init = function() {
        $scope.getAll();
    }

    $scope.getAll = function() {
        LogicLayer.getAllPeople().then(function(response){
            //success
            console.log("success");
            console.log(LogicLayer.people);
            $scope.results = LogicLayer.people;
        }, function(error){
            //error
            console.log("error");
        })

    }

    $scope.init();
}]);
