/*jslint browser: true, node:true, nomen: true, passfail: false, plusplus:true, unparam: true, vars: true, white: true */
/*global window, angular, _, jQuery, $ */
'use strict';

var callWebApi = function ($http, key) { return $http.get('content/app/partials/' + key).then(function (result) { return result.data; }); };

/* Services */
var services = angular.module('rxApp.services', []);

services
    .factory('version', [function versionFactory() { return angular.version.full + ' ' + angular.version.codeName; }])
    .factory('webApiLongLashedMen', ['$http', function ($http) { return { getPresentation: function () { return callWebApi($http, 'presentation/mcrawford-long-lashed-men/presentation.json') } }; }])
;