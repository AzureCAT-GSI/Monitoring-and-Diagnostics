'use strict';

/* Controllers */

angular.module('app.controllers')

    .controller('ProjectsModalCtrl', function ($scope, $modal, $log, applicationInsightsService) {

        // open a new modal window, passing in a given project
        $scope.openModal = function (project) {

            // Register custom AppInsights event
            var formattedName = project.title.replace(/\s/g, ''); // Remove spaces from the project name
            $scope.appInsights('Project.' + formattedName);

            var modalInstance = $modal.open({
                templateUrl: '../content/portfolio/app/home/work/modal/modal.html',
                controller: 'ProjectsModalInstanceCtrl',
                size: 'lg',
                backdrop: false,
                resolve: {
                    project: function () {
                        return project
                    }
                }
            });

        };
    })

    // Please note that $modalInstance represents a modal window (instance) dependency.
    // It is not the same as the $modal service used above.
    .controller('ProjectsModalInstanceCtrl', function ($scope, $modalInstance, project) {

        // store project parameter into the new scope
        $scope.project = project;

        // event for closing the modal
        $scope.closeModal = function () {
            $modalInstance.dismiss('cancel');
        };

    });