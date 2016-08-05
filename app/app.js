define(['angular'],
    function(angular) {
        'use strict';
        var app = angular.module('app', ['ui.router', 'ngAnimate', 'ngAria', 'ngMessages', 'ngMaterial']);
        require([
            'app/controllers/homeController',
            'app/controllers/inputController',
            'app/controllers/outputController',
            'app/controllers/personsController',
            'app/controllers/sumUpdateController'
        ], function() {
            app.config(function($stateProvider, $urlRouterProvider) {
                $urlRouterProvider.otherwise('/');
                $stateProvider
                    .state('home', {
                        url: '/',
                        controller: 'homeController',
                        templateUrl: 'app/templates/home.html'
                    })
                    .state('dataInput', {
                        url: '/input',
                        controller: 'inputController',
                        templateUrl: 'app/templates/input.html'
                    })
                    .state('dataOutput', {
                        url: '/output',
                        controller: 'outputController',
                        templateUrl: 'app/templates/output.html'
                    })
                    .state('persons', {
                        url: '/persons',
                        controller: 'personsController',
                        templateUrl: 'app/templates/persons.html'
                    })
                    .state('sumUpdate', {
                        url: '/sum',
                        controller: 'sumUpdateController',
                        templateUrl: 'app/templates/sumUpdate.html'
                    });
            });
        });
    });
