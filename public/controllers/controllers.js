app.controller('searchIndex', function($scope, $rootScope, services) {

  $scope.searchIndex = function() {
    const searchFileName = $scope.searchFileName,
      searchTerms = $scope.searchTerms,
      indices = $rootScope.indices;
    services.searchIndex(indices, searchFileName, searchTerms, function (result) {
      const searchResult = {};
      if(Object.keys(result)[0] !== 'error'){
        for(let nameOfFile in result){
          // searchResult[nameOfFile] = {};
          // searchResult[nameOfFile].index = result[nameOfFile];
          // searchResult[nameOfFile].titles = [];
          // searchResult[nameOfFile].titles = $rootScope.searchResults[nameOfFile].titles;
          $rootScope.searchResults[nameOfFile].index = result[nameOfFile];
        }
      }
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
              $rootScope.fileList[fileName] = 'present';
              $rootScope.indices[fileName] = result[fileName];
              $rootScope.searchResults[fileName] = result[fileName];
            }
          }
        }
        //console.log($rootScope.indices);

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