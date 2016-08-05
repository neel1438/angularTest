define(['angular'],function(angular){
    'use strict';
    angular.module('app').controller('sumUpdateController',['$scope',function($scope){
        $scope.num1=0;
        $scope.num2=0;
        $scope.num3=0;
        $scope.sum=$scope.num1+$scope.num2+$scope.num3;

        $scope.computeSum=function(){
           $scope.sum= $scope.num1+$scope.num2+$scope.num3;
        };
        $scope.sumChange=function(){
            var oldValue=$scope.num1+$scope.num2+$scope.num3;
            var newValue= $scope.sum;
             if(newValue!=oldValue && oldValue){
                var ratio=newValue/oldValue;
                $scope.num1*=ratio;
                $scope.num2*=ratio;
                $scope.num3*=ratio;
            }
        };
    }]);
});
