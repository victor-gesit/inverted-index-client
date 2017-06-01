app.controller('createIndex', function($scope, $rootScope, services) {
  $scope.createAnIndex = function() {
    if($scope.form.files.$valid && $scope.files) {
      services.createIndex($scope.files, function(result){
        $rootScope.indices = result;
        for(let fileName in result) {
          if (result.hasOwnProperty(fileName)) {
            if (Object.keys(result[fileName])[0] !== 'error' && Object.keys(result)[0] !== 'error') {
              $rootScope.fileList[fileName] = 'present';
              $rootScope.filesToDisplay[fileName] = 'present';
              $rootScope.searchResults[fileName] = result[fileName];
            }
          }
        }
      });
    }
  };
});

app.controller('searchIndex', function($scope, $rootScope, services) {
  $scope.searchIndex = function() {
    const searchFileName = $scope.searchFileName,
      searchTerms = $scope.searchTerms,
      indicesToSearch = $rootScope.indices;

    if (searchFileName === undefined || searchFileName.length === 0) {
      $rootScope.filesToDisplay = $rootScope.fileList;
    } else {
      $rootScope.filesToDisplay = { [searchFileName]: 'present' };
    }
    services.searchIndex(indicesToSearch, searchFileName, searchTerms, function (result) {
      if(Object.keys(result)[0] !== 'error') {
        for(let nameOfFile in result) {
          if(result.hasOwnProperty(nameOfFile)) {
            $rootScope.searchResults[nameOfFile].index = result[nameOfFile];
          }
        }
      }
    });
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
      };
    } else {
      return {
        class: "absent",
        icon: "glyphicon glyphicon-remove"
      };
    }
  };
});
