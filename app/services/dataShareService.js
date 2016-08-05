define(['angular'],function(angular){
    angular.module('app').factory('dataShareService',function(){
        return{
            getData: getData,
            setData: setData
        };
        var data={};
        function setData(input){
            data=input;
        }
        function getData(){
            return data;
        }
    })
});
