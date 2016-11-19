
var app = angular.module("basic_framework", ['ui.router', 'ngResource', 'restangular', 'base64']);

app.config(function($stateProvider, $urlRouterProvider, $httpProvider) {

    $httpProvider.defaults.useXDomain = true; delete $httpProvider.defaults.headers
        .common['X-Requested-With'];

    // For any unmatched url, redirect to /state1
    $urlRouterProvider.otherwise("/");

    // Now set up the states
    $stateProvider
        .state('/', {
            url: "/",
            templateUrl: "login/templates/login.html",
            controller: "loginController"
        })
        .state('app', {
            url: "/app",
            abstract: true,
            templateUrl: "form/templates/app.html",
            controller: "appController"
        })
        .state('app.form', {
            url: "/form",
            templateUrl: "form/templates/form.html",
            controller: "formController"
        })
        .state('app.data', {
            url: "/data",
            templateUrl: "form/templates/data.html",
            controller: "resultsController"
        });
});
