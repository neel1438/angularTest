define(['angular'],function(angular){
    angular.module('app').factory('personDataService',['$http' ,function($http){
        return {
            getPersons : getPersons
        }
        function getPersons(){
            return $http.get('app/data/persons.json');
        }
    }]);
});
