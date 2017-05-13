var app = angular.module('myApp', []);
app.directive('w3TestDirective', () => {
	return {
		restrict: 'A',
		template: "<h1>Made by a directive!</h1>"
	};
});