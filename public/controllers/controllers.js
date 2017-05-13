app.controller('searchIndex', function($scope, $http, $rootScope, services) {
  $scope.searchIndex = function() {
    //$scope.searching = "Data is being searched...";
    services.searchIndex($scope.searchFileName, $scope.searchTerms, function(result) {
      $scope.searching = result;
      for(let fileName in result) {
        if (result.hasOwnProperty(fileName)) {
          if (Object.keys(result[fileName])[0] !== 'error') {
            $rootScope.indices[fileName] = result[fileName];
          }
        }
      }
    });
  }
});

app.controller('createIndex', function($scope, $http, $rootScope, services) {
  $scope.createIndex = function(files) {
    // $scope.creating = 'Data is being created';
    services.createAnIndex(files, function(result){
      $scope.creating = result;
    });

  };
});

app.controller('populateIndex', function($scope, $rootScope) {

});