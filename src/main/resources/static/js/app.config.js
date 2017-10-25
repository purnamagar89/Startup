(function() {
	var app = angular.module('xanrup-app', [ 'ngRoute']);
	app.config('$routeProvider', function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl : '/views/home.html',
			controller : 'MainCtrl'
		}).when('/home', {
			templateUrl : '/views/home.html',
			controller : 'homeController'
		}).when('/contactus', {
			templateUrl : '/views/contactus.html',
			controller : 'contactusController'
		}).otherwise({
			redirectTo : '/'
		});
	});

}());
