angular.module('basic_framework').factory('RepositoryLayer', ['$http', function ($http) {

    //Repository Layer acts as a factory for specifying endpoints for $http requests

    return {
        getEntries: function () {
           return $http.get('http://127.0.0.1:8080/api/entries');
        },
        postEntry: function (entry) {
            return $http.post('http://127.0.0.1:8080/api/entries', entry, { headers: {'Content-Type': 'application/json'}});
        },
        deleteEntry: function (entry) {
            return $http.delete('http://127.0.0.1:8080/api/entries/' + entry._id);
        }
    }
}]);