(function () {
  "use strict";

  angular.module("app").controller("peoplesCtlr", function($scope, $http, peopleFactory) {
    window.$scope = $scope;
    $scope.people = peopleFactory.getPeople();
    $scope.Url = 'http://localhost:3000/api/v1/people/';

    $scope.addEntry = function(person){
      $scope.updateSuccess = '';
      $scope.updateErrors = [];
      $scope.postSuccessMsg = '';
      $scope.deleteSuccessMessage = '';
      $scope.postErrorMessages = [];
      $scope.data = {
        name: $scope.name,
        bio: $scope.bio
      };
      $http.post($scope.Url, $scope.data).then(function(response){
        $scope.people.push(response.data.person);
        $scope.postSuccessMsg = response.data.success;
      }, function(response){
        $scope.postErrorMessages = response.data.errors;
      });
      $scope.name = null;
      $scope.bio = null;
    };

    $scope.deleteEntry = function(person){
      $scope.updateSuccess = '';
      $scope.updateErrors = [];
      $scope.postSuccessMsg = '';
      $scope.deleteSuccessMessage = '';
      $scope.postErrorMessages = [];
      $http.delete($scope.Url + person.id).then(function(response){
        person.displayMessage = true;
        $scope.deleteSuccessMessage = response.data.deleteMessage;
      });
      $scope.index = $scope.people.indexOf(person);
      $scope.people.splice($scope.index, 1);
    };

    $scope.updateEntry = function(person){
      $scope.updateSuccess = '';
      $scope.updateErrors = [];
      $scope.postSuccessMsg = '';
      $scope.deleteSuccessMessage = '';
      $scope.postErrorMessages = [];
      $scope.data = {
        name: person.name,
        bio: person.bio
      };
      $http.patch($scope.Url + person.id, $scope.data).then(function(response){
        $scope.updateSuccess = response.data.success;
      }, function(response){
        $scope.updateErrors = response.data.errors;
      });
      person.updateStatus = false;
      person.displayMessage = true;
    };

    $scope.toggleUpdate = function(person){
      person.updateStatus = !person.updateStatus;
      person.displayMessage = false;
    };

    $scope.toggleOrder = function(attributeName){
      if($scope.orderAttribute != attributeName){
        $scope.orderAttribute = attributeName;
      }
      $scope.isReverse = !$scope.isReverse;
    };
  });
})();
