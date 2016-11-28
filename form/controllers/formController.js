angular.module('basic_framework').controller('formController', ['LogicLayer' , '$scope', '$location', function(LogicLayer, $scope, $location) {

    $scope.entry = {
        title: "",
        body: ""
    };

    $scope.entries = [];

    $scope.init = function() {
        $scope.getAll();
    };

    $scope.getAll = function() {
        LogicLayer.getAllEntries().then(function(response){
            //success
            console.log("Success Get");
            console.log(LogicLayer.entries);
            $scope.entries = LogicLayer.entries;
        }, function(error){
            //error
            console.log("error");
        });

    };

    $scope.submit = function(entry) {
        LogicLayer.addEntry(entry).then(function(response){
            //success
            console.log("Success Post");

            //Call $scope.getAll() to update the table
            $scope.getAll();

            //Clear the input fields
            $scope.entry = {
                title: "",
                body: ""
            };

        }, function(error){
            //error
            console.log("error");
        });
    };

    $scope.delete = function(entry) {
        LogicLayer.delete(entry).then(function(response){
            //success
            $scope.getAll();
        }, function(error){
           //error
        });
    };

    $scope.init();
}]);
