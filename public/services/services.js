app.service('services', function(Upload, $rootScope){
	this.createIndex = function(files, callback) {
		//if (files $$ files.length){
			Upload.upload({
				url: 'http://localhost:5000/api/create',
				arrayKey: '',
				data: {files: files}
			}).then(function(res) {
				callback(res.data);
			}, function(res){
				console.log(res.data);
			});			
		//}

		/*
		const fd = new FormData();
		console.log(fd.files);
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
		*/
	};
	this.searchIndex = function(indices, fileName, terms, callback){

		let searchFileName = undefined;
		if(fileName !== "All"){
			searchFileName = fileName;
		}
		Upload.upload({
			url: 'http://localhost:5000/api/search',
			data: {
				index: indices,
				fileName, searchFileName,
				terms: terms
			}
		}).then(function(res){
			callback(res.data);
		}, function(res){
			console.log('Error: ' + res.data);
		})

		/*
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
		*/
	};
})