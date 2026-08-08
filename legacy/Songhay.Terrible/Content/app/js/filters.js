/*jslint browser: true, node:true, nomen: true, passfail: false, plusplus:true, unparam: true, vars: true, white: true */
/*global window, angular, _, jQuery, $ */
'use strict';

/* Filters */

var filters = angular.module('rxApp.filters', []);

filters.filter('interpolate', ['version', function (version) { return function (text) { return String(text).replace(/\%VERSION\%/mg, version); }; }]);
