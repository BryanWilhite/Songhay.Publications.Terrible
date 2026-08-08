/*jslint browser: true, node:true, nomen: true, passfail: false, plusplus:true, unparam: true, vars: true, white: true */
/*global window, angular, _, jQuery, $ */
'use strict';
var doSplashController = function ($timeout) { $timeout(function () { }, 2000); };
var doBadController = function () { };
var doPresentationController = function ($scope, webApiLongLashedMen) {
    $scope.vm = {
        presentationForLongLashedMen: {}
    };

    webApiLongLashedMen.getPresentation().then(function (data) {
        $scope.vm.presentationForLongLashedMen = data;
        var flow = angular.element(window.document.getElementById('PresentationFlow'));
        flow.removeClass('loading');
    });
};
var doSuperbadController = function () { };
var doTerribleController = function () { };

/* Controllers */
var controllers = angular.module('rxApp.controllers', []);

controllers
    .controller('splashController', ['$timeout', doSplashController])
    .controller('badController', [doBadController])
    .controller('presentationController', ['$scope', 'webApiLongLashedMen', doPresentationController])
    .controller('superbadController', [doSuperbadController])
    .controller('terribleController', [doTerribleController])
;