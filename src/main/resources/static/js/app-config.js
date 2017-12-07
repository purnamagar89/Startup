(function() {
	var app = angular.module('xanrup-app', [ 'ngRoute', 'ngResource',
			'index-controller', 'index-service','scroolCont']);
	app.config(function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl : '/views/home.html',
			controller : 'MainCtrl'
		}).otherwise({
			redirectTo : '/'
		});
	});
})();
