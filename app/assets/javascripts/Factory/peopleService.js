angular.module('app').factory('peopleFactory', function($http){
  var Url = 'http://localhost:3000/api/v1/people/';
  var _people = [];
  var service = {};
  service.getPeople = function (){
      $http.get(Url).then(function(response){
        for(var i=0; i < response.data.length; i++){
          response.data[i].displayMessage = false;
          response.data[i].updateStatus = false;
          _people.push(response.data[i]);
        }
      });
    return _people;
  };
  return service;
});
