'use strict';

// declare app
angular
    .module('app', [
        // Angular Core Modules
        'ngRoute',
        'ngTouch',

        // 3rd Party Modules
        'ApplicationInsightsModule',
        'ui.bootstrap',
        'duScroll',

        // Custom Modules
        'app.controllers'
    ])
    .config(['applicationInsightsServiceProvider', '$routeProvider', function (applicationInsightsServiceProvider, $routeProvider) {

        // Configue App Insights
        var options = { applicationName: 'app' };
        applicationInsightsServiceProvider.configure('d3060336-91f2-454a-be7c-0501ecb9c4ba', options);

        // Configure routing
        $routeProvider.when('/home', { templateUrl: '../Content/portfolio/app/home/home.html', controller: 'HomeCtrl' });
        $routeProvider.otherwise({ redirectTo: '/home' });

    }]);
