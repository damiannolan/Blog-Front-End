angular.module('basic_framework').factory('LogicLayer', ['RepositoryLayer', function (RepositoryLayer) {
    

    return {
        getTasks: function(){
            return RepositoryLayer.getTasks();
        }
    }

}]);
