'use strict';

/* Controllers */

angular.module('app.controllers', [])

    .controller('HomeCtrl', ['$scope', '$document', 'applicationInsightsService', function ($scope, $document, applicationInsightsService) {

        // Scrolling Behavior
        $scope.toTheTop = function () {
            $document.scrollTop(0, 1000);
        }

        // Custom AppInsights Events
        $scope.appInsights = function (eventName) {

            applicationInsightsService.trackEvent(eventName);

        }

    }]);