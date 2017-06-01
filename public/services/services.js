app.service('services', function(Upload, $rootScope, $http) {
	this.createIndex = function(files, callback) {
			Upload.upload({
				url: 'http://invidex.herokuapp/api/create',
				arrayKey: '',
				data: {files: files}
			}).then(function(res) {
				callback(res.data);
			}, function(res){
				console.log(res.data);
			});	
	};

	this.searchIndex = function(indicesToSearch, fileToSearch, terms, callback){
		let index = indicesToSearch;
		let searchFileName = fileToSearch;
		if(fileToSearch === undefined ||  fileToSearch.length === 0 ){
			searchFileName = undefined;
		};
		// There is currently a bug associated with passing in indicesToSearch
		// To sort this out, I simply do not pass in any indices to search
		// Thereby making the API use a previously created index
		const data = {
			index: undefined,
			terms: terms,
			fileName: searchFileName
		};
		$http.post("http://invidex.herokuapp.com/api/search", data)
			.then(function(res) {
				callback(res.data);
			}, function(res){
				callback(res.data);
			})
	};
})