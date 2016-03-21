(function() {
  "use strict";

  angular.module("app").controller("seatsCtrl", function($scope, $http){

  $scope.setup = function(venue_id){
    $http.get("http://localhost:3000/api/v1/venues/" + venue_id + ".json").then(function(response){
      $scope.seatInfo = response.data;
      $scope.venId = venue_id;
    });
  };

  $scope.sort = function(keyname){
    $scope.sortKey = keyname;   //set the sortKey to the param passed
    $scope.reverse = !$scope.reverse; //if true make it false and vice versa
  };

  window.scope = $scope;

  });

}());