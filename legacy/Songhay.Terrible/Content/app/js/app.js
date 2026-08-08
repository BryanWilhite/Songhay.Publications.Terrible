/*jslint browser: true, node:true, nomen: true, passfail: false, plusplus:true, unparam: true, vars: true, white: true */
/*global window, angular, _, jQuery, $ */
'use strict';

// Declare app level module which depends on filters, and services
var rxApp = angular.module('rxApp', ['ngRoute', 'ngAnimate', 'rxApp.filters', 'rxApp.services', 'rxApp.directives', 'rxApp.controllers']);

rxApp.config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/splash', { templateUrl: 'content/app/partials/splash.html', controller: 'splashController' });
    $routeProvider.when('/bad', { templateUrl: 'content/app/partials/bad.html', controller: 'badController' });
    $routeProvider.when('/superbad', { templateUrl: 'content/app/partials/superbad.html', controller: 'superbadController' });
    $routeProvider.when('/terrible', { templateUrl: 'content/app/partials/terrible.html', controller: 'terribleController' });

    $routeProvider.when('/presentation-long-lashed-men', { templateUrl: 'content/app/partials/presentation.html', controller: 'presentationController' });
    $routeProvider.when('/presentation-long-lashed-men-print', { templateUrl: 'content/app/partials/presentation-print.html', controller: 'presentationController' });

    $routeProvider.otherwise({ redirectTo: '/splash' });
}]);
