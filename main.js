'use strict';

require.config({
    paths: {
        'angular': 'lib/angular/angular.min',
        'ngAnimate' : 'lib/angular-animate/angular-animate.min',
        'ngMaterial' : 'lib/angular-material/angular-material.min',
        'ngMessages' : 'lib/angular-message/angular-message.min',
        'ngAria' : 'lib/angular-aira/angular-aira.min',
        'ui-router' : 'lib/angular-ui-router/release/angular-ui-router.min',
        'appModule': 'app/app'
    },
    shim: {
        'angular': {
            exports: 'angular'
        },
       'ngAnimate' : {
            deps:['angular']
       },
       'ngMessages' : {
            deps:['angular']
       },
       'ngAria' : {
            deps:['angular']
       },
       'ui-router' : {
            deps:['angular']
       },
       'ngMaterial' : {
            deps:['angular','ngMessages','ngAria','ngAnimate'],
       },
    }
});

require(['app'],function(app){
    angular.bootstrap(document,app);
});
