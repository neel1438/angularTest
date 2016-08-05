define(['angular','app/services/personDataService'],function(angular){
    angular.module("app")
    .controller('personsController',['$scope' , 'personDataService',function($scope,personDataService){
       personDataService.getPersons().then(function(result){
             $scope.persons=result.data;
        });
        $scope.reverse=false;
        $scope.propertyName = 'age';

       $scope.sortBy=function(propName){
            $scope.reverse = ($scope.propertyName === propName) ? !$scope.reverse : false;
            $scope.propertyName = propName;
       };
    }]);
});
