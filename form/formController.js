angular.module('basic_framework').controller('formController', ['LogicLayer', function(LogicLayer) {

       LogicLayer.getTasks().success(function(response){
            console.log(response);
        });

}]);
