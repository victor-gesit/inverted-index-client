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
	this.searchIndex = function(fileName, terms, callback){
		$http({
			method:'POST',
			url: 'http://localhost:5000/api/search',
			data: {
    index: {
      'book1.json': { index: {
        an: [0],
        into: [0, 1],
        inquiry: [0],
        is: [0, 1],
        string: [0],
        the: [1],
        this: [0],
        used: [1]
      }
      },
      'book2.json': { index: {
        an: [0, 1],
        boy: [0, 1],
        into: [0],
        lost: [0, 1],
        mango: [0],
        table: [1],
        train: [0],
        user: [1]
      }
      }
    },
    terms: ['an', 'into']
  }
		}).then(function(res){
			callback(res.data);
		});
	};
})