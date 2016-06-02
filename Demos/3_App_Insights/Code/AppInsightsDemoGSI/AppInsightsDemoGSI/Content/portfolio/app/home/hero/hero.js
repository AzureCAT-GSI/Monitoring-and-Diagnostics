(function () {
    'use strict';

    angular
        .module('app.controllers')
        .controller('HeroCtrl', hero);

    hero.$inject = ['$scope']; 

    function hero($scope) {
        $scope.title = 'hero';

        activate();

        function activate() {

            // Home Carousel Data
            $scope.homeSlidesInterval = 7000;
            //$scope.homeSlidesInterval = -1; // testing

            $scope.homeSlides = [
                {
                    image: '../content/portfolio/img/slider/intro_team.png',
                    background: '../content/portfolio/img/slider/intro_team_bg.jpg'
                },
                {
                    image: '../content/portfolio/img/slider/intro_process.png',
                    background: '../content/portfolio/img/slider/intro_process_bg.jpg'
                }
            ];

        }
    }
})();
