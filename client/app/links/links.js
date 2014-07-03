angular.module('shortly.links', [])

.controller('LinksController', function ($scope, Links) {

  $scope.data = {};

  $scope.getLinks = function() {
    Links.getLinks()
      .then(function(links) {
        // if (links.signal){
        //   window.location.href = links.url;
        // } else {
          $scope.data.links = links;
        // }
      })
      .catch(function(error) {
    });
  };

  $scope.getLinks();

});
