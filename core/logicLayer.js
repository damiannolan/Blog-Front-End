angular.module('basic_framework').factory('LogicLayer', ['RepositoryLayer', function (Restangular, RepositoryLayer) {


    return {
        getTasks: function(){
            return RepositoryLayer.getTasks();
        }
    }

}]);
