
var app = angular.module("basic_framework", ['ui.router', 'ngResource', 'restangular']);

app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

    $httpProvider.defaults.useXDomain = true; delete $httpProvider.defaults.headers
        .common['X-Requested-With'];

    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");

    // Now set up the states
    $stateProvider
        .state('/', {
            url: "/",
            templateUrl: "form/templates/form.html",
            controller: "formController"
        })
        .state('data', {
            url: "/data",
            templateUrl: "form/templates/data.html",
            controller: "resultsController"
        });
});
