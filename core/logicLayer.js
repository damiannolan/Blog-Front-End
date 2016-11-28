angular.module('basic_framework').factory('LogicLayer', ['RepositoryLayer', '$q', function (RepositoryLayer, $q) {

    //Assign the scope of LogicLayer factory to a variable LogicLayer
    var LogicLayer = this;

    LogicLayer.entries = {};

    LogicLayer.getAllEntries = function() {

        var deferred = $q.defer();

        RepositoryLayer.getEntries().then(function(response){
            //success
            //log the response object to the console
            console.log(response);

            //Assign the response data to new object to get rid of unnecessary data
            LogicLayer.entries = response.data;

            deferred.resolve(LogicLayer.entries);
        }).catch(function(error){
            deferred.reject(error);
        });

        return deferred.promise;
    };

    LogicLayer.addEntry = function(entry) {

        var deferred = $q.defer();

        RepositoryLayer.postEntry(entry).then(function(response){
            //success
            console.log("Successfully posted person");

            deferred.resolve(response);
        }).catch(function(error){
            deferred.reject(error);
        });

        return deferred.promise;
    };

    LogicLayer.delete = function(entry) {

        var deferred = $q.defer();

        RepositoryLayer.deleteEntry(entry).then(function(response){
            //success
            console.log(response);
            console.log("Successfully deleted person");

            deferred.resolve(response);
        }).catch(function(error){
            console.log(error);
            deferred.reject(error);
        });

        return deferred.promise;
    };

    //return the scope through the reference variable LogicLayer
    return LogicLayer;

}]);
