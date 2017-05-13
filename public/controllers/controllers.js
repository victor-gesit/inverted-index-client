app.controller('searchIndex', function($scope, $http, $rootScope, services) {
  $scope.searchIndex = function() {
    services.searchIndex($rootScope.indices, $scope.searchFileName, $scope.searchTerms, function(result) {
      $rootScope.searchResults = result;
    });
  }
});

app.controller('createIndex', function($scope, $http, $rootScope, services) {
  $scope.createAnIndex = function(files) {
    services.createIndex(files, function(result){
      console.log(result);
      for(let fileName in result) {
        if (result.hasOwnProperty(fileName)) {
          if (Object.keys(result[fileName])[0] !== 'error') {
            results[fileName] = result[fileName];
            $rootScope.fileList.append(fileName);
            $rootScope.indices[fileName] = result[fileName];
          }
        }
      }
    });

  };
});

app.controller('populateIndex', function($scope, $rootScope) {
  $scope.searchResults = $rootScope.indices;
  $scope.isPresent = function(token, titleIndex) {
    const indexOfToken = $rootScope.searchResults[fileName].index[token];
    const titleIndexAsNumber = Number(titleIndex);
    if(indexOfToken.indexOf(titleIndexAsNumber) >= 0) {
      return {
        class: "present",
        icon: "glyphicon glyphicon-ok"
      }
    } else {
      return {
        class: "absent",
        icon: "glyphicon glyphicon-remove"
      }
    }
  }
});