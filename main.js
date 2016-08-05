require.config({
    paths: {
        'angular': '/lib/angular/angular.min',
        'ngAnimate' : '/lib/angular-animate/angular-animate.min',
        'ngMaterial' : '/lib/angular-material/angular-material.min',
        'ngMessages' : 'lib/angular-messages/angular-messages.min',
        'ngAria' : '/lib/angular-aria/angular-aria.min',
        'ui-router' : '/lib/angular-ui-router/release/angular-ui-router.min',
        'appModule' : '/app/app',
        'coreModule': '/app/coreModule'
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
            deps:['ngMessages','ngAria','ngAnimate']
       },
       'appModule':{
        deps:['ui-router','ngMaterial']
       },
       'coreModule' :{
        deps: ['appModule']
       }
    }
});
require(['coreModule'],function(){

});
