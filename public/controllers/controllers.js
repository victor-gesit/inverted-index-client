app.controller('searchIndex', function($scope, $rootScope, services) {
  $scope.searchIndex = function() {
    services.searchIndex($rootScope.indices, $scope.searchFileName, $scope.searchTerms, function(result) {
      $rootScope.searchResults = result;
    });
  }
});

app.controller('createIndex', function($scope, $rootScope, services) {
  $scope.createAnIndex = function() {
    if($scope.form.files.$valid && $scope.files) {
      services.createIndex($scope.files, function(result){
        for(let fileName in result) {
          if (result.hasOwnProperty(fileName)) {
            if (Object.keys(result[fileName])[0] !== 'error') {
              $rootScope.fileList.push(fileName);
              $rootScope.indices[fileName] = result[fileName];
              $rootScope.searchResults = $rootScope.indices;
            }
          }
        }
      });
    }
  };
});

app.controller('populateIndex', function($scope, $rootScope) {
  $scope.isPresent = function(token, fileName, titleIndex) {
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