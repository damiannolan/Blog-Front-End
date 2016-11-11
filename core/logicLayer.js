angular.module('basic_framework').factory('LogicLayer', ['RepositoryLayer', function (RepositoryLayer) {

    return {
        getPeople: function(){

            return RepositoryLayer.getPeople();

        },
        postPerson: function(data){
            return RepositoryLayer.postPerson(data);
        }
    }

}]);
