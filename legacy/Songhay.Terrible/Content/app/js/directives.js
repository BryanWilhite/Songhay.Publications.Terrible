/*jslint browser: true, node:true, nomen: true, passfail: false, plusplus:true, unparam: true, vars: true, white: true */
/*global window, angular, _, jQuery, $ */
'use strict';

var doAppVersion = function (version) {
    return function (scope, element, attributes) {
        element.text(version);
    };
};

var doPresentationContainer = function ($document) {
    return {
        restrict: 'A',
        link: function ($scope, $element, $attrs) {

            var blockFlow = angular.element(window.document.getElementById('RatioDisplayFlow'));
            var blocks = blockFlow.find('div');
            var displayItemIndex = 0;
            var displayItemCount = blocks.length;

            blockFlow.find('span').on('click', function ($event) {
                var span = $event.currentTarget;
                blocks.removeClass('opaque');

                if (span.id == 'Previous') {
                    --displayItemIndex;
                    if (displayItemIndex < 0) {
                        displayItemIndex = (displayItemCount - 1);
                    }
                } else {
                    ++displayItemIndex;
                    if (displayItemIndex > (displayItemCount - 1)) {
                        displayItemIndex = 0;
                    }
                }

                blocks.eq(displayItemIndex).addClass('opaque');
            });
        }
    };
};

/* Directives */
var directives = angular.module('rxApp.directives', []);

directives
    .directive('appVersion', ['version', doAppVersion])
    .directive('rxPresentation', ['$document', doPresentationContainer])
;
