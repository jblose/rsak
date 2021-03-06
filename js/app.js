'use strict';

// Declare app level module which depends on filters, and services
angular.module('myApp', ['ngRoute','ui.bootstrap.datetimepicker','ui.utils','myApp.filters', 'myApp.services', 'myApp.directives', 'myApp.controllers']).
    config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/schedule', {templateUrl: 'partials/schedule.html', controller: 'ScheduleCtrl'});
        $routeProvider.when('/vacancy', {templateUrl: 'partials/vacsearch.html', controller: 'VacSearchCtrl'});
        $routeProvider.when('/reservation', {templateUrl: 'partials/reservation.html', controller: 'ReservationCtrl'});
        $routeProvider.when('/reservation/:resid', {templateUrl: 'partials/resview.html', controller: 'ResViewCtrl'});
        $routeProvider.when('/clientman/:action', {templateUrl: 'partials/clientman.html', controller: 'ClientManCtrl'});
        $routeProvider.when('/dogman', {templateUrl: 'partials/dogman.html', controller: 'DogManCtrl'});
        $routeProvider.when('/view2', {templateUrl: 'partials/partial2.html', controller: 'MyCtrl2'});
        $routeProvider.otherwise({redirectTo: '/schedule'});
    }]);
