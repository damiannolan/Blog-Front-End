angular.module('basic_framework').factory('RepositoryLayer', ['$http', function (Restangular, $http) {

    return {
        getTasks: function () {
            return $http.get('http://127.0.0.1:5000/tasks');
        }
    }

}]);
