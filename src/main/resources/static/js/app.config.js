(function() {
	var app = angular.module('app', [ 'ngRoute', 'ngResource' ]);
	app.config(function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl : '/index.html',
			controller : 'indexController'
		}).
		when('/home', {
			templateUrl : '/views/home.html',
			controller : 'homeController'
		}).when('/contactus', {
			templateUrl : '/views/contactus.html',
			controller : 'contactusController'
		}).otherwise({
			redirectTo : '/'
		});
	});

})();
