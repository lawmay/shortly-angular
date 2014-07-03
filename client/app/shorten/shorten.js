angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {

  $scope.link = {};
  $scope.loading = false;
  $scope.addLink = function() {
    $scope.loading = true;
    Links.addLink($scope.link)
      .then(function(shortenedLink) {
        $scope.loading = false;
        $location.path("/links");
      })
      .catch(function(error) {
        console.log(error);
    });
  };

});
