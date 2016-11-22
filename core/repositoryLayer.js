angular.module('basic_framework').factory('RepositoryLayer', ['$http', function ($http) {

    return {
        getPeople: function () {
           return $http.get('http://127.0.0.1:5000/people');
        },
        postPerson: function (data){
            return $http.post('http://127.0.0.1:5000/people', {'content': data}, { headers: {'Content-Type': 'application/json'}}).success(function(){
            });
        }
    }
}]);