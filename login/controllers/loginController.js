angular.module('basic_framework').controller('loginController', ['LogicLayer' , '$scope', '$location', function(LogicLayer, $scope, $location) {

    $scope.login = function(){
        checkPassword();
        if(!wrongPassword)
            $location.path('app/form');
    };

    $scope.loginDetails = {
        password: "",
        username: ""
    };

    function checkPassword(){
        if($scope.loginDetails.password === 'password' && $scope.loginDetails.username === 'username')
            wrongPassword = false;
        else
            wrongPassword = true;
    }

   var wrongPassword = false;

}]);
