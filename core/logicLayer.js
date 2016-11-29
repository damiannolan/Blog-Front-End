angular.module('basic_framework').factory('LogicLayer', ['RepositoryLayer', '$q', function (RepositoryLayer, $q) {
    //$q - A service that helps you run functions asynchronously,
    // and use their return values (or exceptions) when they are done processing.

    //Assign the scope of LogicLayer factory to a variable LogicLayer
    var LogicLayer = this;

    LogicLayer.entries = {};

    LogicLayer.getAllEntries = function() {

        //A promise represents the eventual result of an asynchronous operation.
        // It is a placeholder into which the successful result value or reason for failure will materialize.

        //The purpose of the deferred object is to expose the associated Promise instance as well as APIs that
        // can be used for signaling the successful or unsuccessful completion, as well as the status of the task.
        var deferred = $q.defer();

        //Make $http call using endpoint specified in repositoryLayer
        RepositoryLayer.getEntries().then(function(response){
            //Success callBack - handle the response

            //Log the response object to the console
            console.log(response);

            //Assign the response data to new object to get rid of unnecessary data
            LogicLayer.entries = response.data;

            //Resolve the derived promise with LogicLayer.entries
            deferred.resolve(LogicLayer.entries);
        }).catch(function(error){
            //error callBack
            //.catch(errorCallBack) is shorthand for promise.then(null, errorCallBack)

            //Reject the promise with the reason
            deferred.reject(error);
        });

        return deferred.promise;
    };

    LogicLayer.addEntry = function(entry) {

        //Instantiate deferred object using $q.defer()
        var deferred = $q.defer();

        //Make $http call using endpoint specified in repositoryLayer
        RepositoryLayer.postEntry(entry).then(function(response){
            //success
            console.log("Successfully posted person");

            //Logging the response will log the http response from the API which in this case returns the data 'Posted'
            //console.log(response);

            //Resolve the promise with the response
            deferred.resolve(response);
        }).catch(function(error){

            //Reject the promise with the reason/error
            deferred.reject(error);
        });

        return deferred.promise;
    };

    LogicLayer.delete = function(entry) {

        var deferred = $q.defer();

        //Make $http call using endpoint specified in repositoryLayer
        RepositoryLayer.deleteEntry(entry).then(function(response){
            //success callback

            //Log the response to the console which will contain the data 'Deleted' sent from API
            console.log(response);
            console.log("Successfully deleted person");

            //Resolve using response
            deferred.resolve(response);
        }).catch(function(error){
            console.log(error);

            //Reject with error/reason
            deferred.reject(error);
        });

        return deferred.promise;
    };

    //Return the scope through the reference variable LogicLayer
    return LogicLayer;

}]);
