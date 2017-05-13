app.controller('myCtrl', ($scope) => {
	$scope.firstName = "Victor";
	$scope.lastName = "Idongesit";
});

app.controller('personCtrl', ($scope, $http) => {

	$http.get('http://localhost:5000/').then((response) =>{
		$scope.serverReply = response.data;
	});
	$http({
		method: 'POST',
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
	}).then((response) => {
		$scope.serverResponse = response.data;
		$scope.myWelcome = response.headers;
	}).then((response) => {
		//$scope.myWelcome = response.statusText;
	});



	$scope.fullName = function() {
		return $scope.firstName + ' ' + $scope.lastName;
	};
	$scope.people = [
		{
			name: 'Joshua',
			country: 'Nigeria'
		},
		{
			name: 'James',
			country: 'Germany'
		},
		{
			name: 'Mark',
			country: 'AAAL'
		},
		{
			name: 'John',
			country: 'Japan'
		}
	];
	$scope.orderBy = function(word) {
		$scope.head = word;
	};
});
app.service('hexafy', function() {
    this.myFunc = function (x) {
        return x.toString(16);
    }
});

app.service('fixIt', function() {
	this.myCase = (word) => {
		return word.toUpperCase();
	}
});
app.controller('namesCtrl', ($scope, $interval, fixIt, hexafy) => {
	$interval(() => {
		$scope.theTime = new Date().toLocaleTimeString();
	}, 1000);
	$scope.names = [
        {name:'Jani',country:'Norway', age: 25},
        {name:'Hege',country:'Sweden', age: 35},
        {name:'Kai',country:'Denmark', age: 45}
    ];
    $scope.moreNames = ['Obinna', 'Nkechi', 'George', 'Soogun', 'Julian'];
    $scope.serviced = hexafy.myFunc(255);
    $scope.myServiced = fixIt.myCase('idongesit');
});

