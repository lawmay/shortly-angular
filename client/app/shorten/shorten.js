angular.module('shortly.shorten', [])

.controller('ShortenController', function ($scope, $location, Links) {

  // console.log('shorten controller');
  $scope.link = {};
  $scope.loading = false;

  $scope.addLink = function() {
    console.log($scope.link);
    $scope.loading = true;
    Links.addLink($scope.link)
      .then(function(shortenedLink) {
        console.log(shortenedLink);
        $scope.loading = false;
        // $scope.link.short = shortenedLink;
      })
      .catch(function(error) {
        console.log(error);
    });
  };

});
