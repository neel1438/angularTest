define(['angular','app/services/dataShareService'],function(angular){
    angular.module("app")
    .controller('outputController',['$scope','dataShareService',function($scope,dataShareService){
        $scope.output=dataShareService.getData();
    }]);
});
