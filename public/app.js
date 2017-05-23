const app = angular.module('inVidex', ['ngFileUpload'])
.run(function($rootScope){
	$rootScope.indices = {};
	$rootScope.fileList = {};
	$rootScope.filesToDisplay = {};
	$rootScope.searchResults = {};
});
