(function() {
  "use strict";

  angular.module("app").controller("sgSeatsCtrl", function($scope, $http){

  $scope.setup = function(venue_id){
    $http.get("http://localhost:3000/api/v1/sg_db_venues/" + venue_id + ".json").then(function(response){
      $scope.sgSeatInfo = response.data;
      $scope.sgVenId = venue_id;
    });
  };

  $scope.sort = function(keyname){
    $scope.sortKey = keyname;   //set the sortKey to the param passed
    $scope.reverse = !$scope.reverse; //if true make it false and vice versa
  };

  window.scope = $scope;

  });

}());