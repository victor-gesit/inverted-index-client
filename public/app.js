const app = angular.module('inVidex', ['ngFileUpload'])
.run(function($rootScope){
	$rootScope.indices = {};
	$rootScope.fileList = {};
	$rootScope.searchResults = {};
	$rootScope.tokensToSearch = {};
	$rootScope.tokens = [];
	$rootScope.allSearchTerms = '';
});
