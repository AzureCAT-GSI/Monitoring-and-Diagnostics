(function () {
    'use strict';

    angular
        .module('app')
        .controller('WorkCtrl', work);

    work.$inject = ['$scope', 'applicationInsightsService'];

    function work($scope, applicationInsightsService) {
        $scope.title = 'work';

        activate();

        function activate() {

            // Project Data
            $scope.projects = [
                {
                    title: 'Blue Yonder Airlines',
                    thumbnail: '../content/portfolio/img/projects/blue-yonder.png',
                    technology: 'Windows 8',
                    offering: 'BYA',
                    subsidiary: 'Americas - USA',
                },
                {
                    title: 'City Power & Light',
                    thumbnail: '../content/portfolio/img/projects/city.png',
                    technology: 'SharePoint',
                    offering: 'General',
                    subsidiary: 'APAC - Japan',
                },
                {
                    title: 'Coho Vineyard',
                    thumbnail: '../content/portfolio/img/projects/coho.png',
                    technology: 'SharePoint',
                    offering: 'SMAX',
                    subsidiary: 'Americas- Brazil',
                },
                {
                    title: 'Fabrikam Residences',
                    thumbnail: '../content/portfolio/img/projects/fabrikam.png',
                    technology: 'Windows Phone',
                    offering: 'General',
                    subsidiary: 'APAC - Australia'
                },
                {
                    title: 'Fourth Coffee',
                    thumbnail: '../content/portfolio/img/projects/fourth-coffee.png',
                    technology: 'Windows 8',
                    offering: 'SMAX',
                    subsidiary: 'Americas - USA',
                },
                {
                    title: 'Lamna Healthcare Company',
                    thumbnail: '../content/portfolio/img/projects/lamna.png',
                    technology: 'Windows 8',
                    offering: 'Third Wave',
                    subsidiary: 'EMEA - France',
                },
                {
                    title: 'Lucerne Publishing',
                    thumbnail: '../content/portfolio/img/projects/lucerne.png',
                    technology: 'Windows Phone',
                    offering: 'Third Wave',
                    subsidiary: 'APAC - Singapore'
                },
                {
                    title: 'Northwind Traders',
                    thumbnail: '../content/portfolio/img/projects/northwind.png',
                    technology: 'Custom',
                    offering: 'Third Wave',
                    subsidiary: 'EMEA - Germany',
                },
                {
                    title: 'Tailspin Toys',
                    thumbnail: '../content/portfolio/img/projects/tailspin.png',
                    technology: 'Windows 8',
                    offering: 'SMAX',
                    subsidiary: 'Americas - USA'
                },
                {
                    title: 'VanArsdel, Ltd.',
                    thumbnail: '../content/portfolio/img/projects/van.png',
                    technology: 'SharePoint 2013',
                    offering: 'General',
                    subsidiary: 'Americas - Canada',
                }
            ]


            $scope.searchFilter = '';

            $scope.setSearchFilter = function (filter) {
                // set the searchFilter variable to match what was clicked
                $scope.searchFilter = filter;
            }

        }
    }
})();
