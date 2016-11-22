angular.module('basic_framework').factory('LogicLayer', ['RepositoryLayer', '$q', '$http', function (RepositoryLayer, $q, $http) {

    var LogicLayer = this;

    LogicLayer.people = {};

    LogicLayer.getAllPeople = function() {

        var deferred = $q.defer();

        RepositoryLayer.getPeople().then(function(response){
            LogicLayer.people = response.data;
            deferred.resolve(LogicLayer.people);
        }).catch(function(error){
            deferred.reject(error);
        });

        return deferred.promise;
    };

    LogicLayer.addPerson = function(data) {

        var deferred = $q.defer();

        RepositoryLayer.postPerson(data).then(function(response){
            //success
            console.log("Successfully posted person");
            deferred.resolve(response);
        }).catch(function(error){
            deferred.reject(error);
        });

        return deferred.promise;
    };

    return LogicLayer;

}]);
