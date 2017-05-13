app.service('services', function($http, $rootScope){
	this.createIndex = function(files, callback) {
		const fd = new FormData();
		files.forEach((file, index) => {
			fd.append('files', files[index]);
		});
		
		$http({
			method: 'POST',
			url: 'http://localhost:5000/api/create',
			transformRequest: angular.identity,
            headers: {'Content-Type': undefined}
		}).then((res) => {
			callback(res.data);
		}, (res) => {
			console.log(res.data);
			callback(res.data);
		});
	};
	this.searchIndex = function(indices, fileName, terms, callback){
		let searchFileName = undefined;
		if(fileName !== "All"){
			searchFileName = fileName;
		}
		$http({
			method:'POST',
			url: 'http://localhost:5000/api/search',
			data: {
				index: indices,
				fileName: searchFileName,
				terms: terms
			}
		}).then(function(res){
			callback(res.data);
		});
	};
})