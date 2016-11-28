angular.module('basic_framework').controller('formController', ['LogicLayer' , '$scope', '$location', function(LogicLayer, $scope, $location) {

    $scope.entry = {
        title: "",
        body: "",
        time: ""
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

            $scope.calcTimeAgo();

        }, function(error){
            //error
            console.log("error");
        });

    };

    $scope.submit = function(entry) {

        //Prevent users from posting entries without having a title and body
        if($scope.entry.title == "" || $scope.entry.body == "")
        {
            alert("Cannot submit empty entry!");
            return;
        }

        //Assign new Date for blog entry
        entry.time = new Date();

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

    $scope.calcTimeAgo = function () {

        for (var i in $scope.entries) {
            //Loop through the entries array and calculate the time in 'time ago' format using moment.js
            //Reference: https://snipt.net/raw/4925edfae1dc174d5e7dfeb4c07ed6f6/?nice

            var now = new Date();
            //Wrap the dates using moment
            var nowWrapper = moment(now);
            var pastDateWrapper = moment($scope.entries[i].time);
            //Calculate the displayDate using .from()
            var displayDate = pastDateWrapper.from(nowWrapper);

            //console.log(displayDate);
            $scope.entries[i].time = displayDate;
        }
    };

    $scope.init();
}]);
