angular.module('basic_framework').factory('LogicLayer', ['RepositoryLayer', function (RepositoryLayer) {

    return {
        getTasks: function(){
            return RepositoryLayer.getTasks();
        },
        postTask: function(data){
            return RepositoryLayer.postTask(data);
        }
    }

}]);
