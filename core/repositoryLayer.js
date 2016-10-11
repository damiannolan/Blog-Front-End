angular.module('basic_framework').factory('RepositoryLayer', ['$http', function ($http) {

    return {
        getTasks: function () {
           return $http.get('http://127.0.0.1:5000/tasks');
        },
        postTask: function (data) {
            return $http.post('http://127.0.0.1:5000/tasks', {'content': data}, { headers: {'Content-Type': 'application/json'}}).success(function(){
                console.log("Posted Data")
            });
        }
    }

}]);
