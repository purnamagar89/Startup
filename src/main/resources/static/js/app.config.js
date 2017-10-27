var app = angular.module('app', [ 'ngRoute', 'ngResource', 'ngAnimate' ]);
app.config(function($routeProvider) {
	$routeProvider.when('/users', {
		templateUrl : '/views/users.html',
		controller : 'usersController'
	}).when('/roles', {
		templateUrl : '/views/roles.html',
		controller : 'rolesController'
	}).when('/home', {
		templateUrl : '/views/home.html',
		controller : 'MainCtrl'
	}).otherwise({
		redirectTo : '/'
	});
});

/*app.controller('usersController', function($scope) {
	$scope.headingTitle = "User List";
});

app.controller('rolesController', function($scope) {
	$scope.headingTitle = "Roles List";
});

app.factory('QueueService', function($rootScope) {
	var queue = new createjs.LoadQueue(true);
	function loadManifest(manifest) {
		queue.loadManifest(manifest);

		queue.on('progress', function(event) {
			$rootScope.$broadcast('queueProgress', event);
		});

		queue.on('complete', function() {
			$rootScope.$broadcast('queueComplete', manifest);
		});
	}

	return {
		loadManifest : loadManifest
	}
});

app
		.controller(
				'MainCtrl',
				function($scope, $timeout,QueueService) {
					var INTERVAL = 3000, slides = [ {
						id : "image00",
						src : "./images/image00.jpg"
					}, {
						id : "image01",
						src : "./images/image01.jpg"
					}, {
						id : "image02",
						src : "./images/image02.jpg"
					}, {
						id : "image03",
						src : "./images/image03.jpg"
					}, {
						id : "image04",
						src : "./images/image04.jpg"
					} ];

					function setCurrentSlideIndex(index) {
						$scope.currentIndex = index;
					}

					function isCurrentSlideIndex(index) {
						return $scope.currentIndex === index;
					}

					function nextSlide() {
						$scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex
								: 0;
						$timeout(nextSlide, INTERVAL);
					}

					function loadSlides() {
						QueueService.loadManifest(slides);
					}

					$scope.$on('queueProgress', function(event, queueProgress) {
						$scope.$apply(function() {
							$scope.progress = queueProgress.progress * 100;
						});
					});

					$scope.$on('queueComplete', function(event, slides) {
						$scope.$apply(function() {
							$scope.slides = slides;
							$scope.loaded = true;

							$timeout(nextSlide, INTERVAL);
						});
					});

					$scope.progress = 0;
					$scope.loaded = false;
					$scope.currentIndex = 0;
					$scope.currentAnimation = 'slide-left-animation';

					$scope.setCurrentSlideIndex = setCurrentSlideIndex;
					$scope.isCurrentSlideIndex = isCurrentSlideIndex;

					loadSlides();
				});

app.animation('.slide-left-animation', function($window) {
	return {
		enter : function(element, done) {
			TweenMax.fromTo(element, 1, {
				left : $window.innerWidth
			}, {
				left : 0,
				onComplete : done
			});
		},

		leave : function(element, done) {
			TweenMax.to(element, 1, {
				left : -$window.innerWidth,
				onComplete : done
			});
		}
	};
});

app.directive('bgImage', function($window, $timeout) {
	return function(scope, element, attrs) {
		var resizeBG = function() {
			var bgwidth = element.width();
			var bgheight = element.height();

			var winwidth = $window.innerWidth;
			var winheight = $window.innerHeight;

			var widthratio = winwidth / bgwidth;
			var heightratio = winheight / bgheight;

			var widthdiff = heightratio * bgwidth;
			var heightdiff = widthratio * bgheight;

			if (heightdiff > winheight) {
				element.css({
					width : winwidth + 'px',
					height : heightdiff + 'px'
				});
			} else {
				element.css({
					width : widthdiff + 'px',
					height : winheight + 'px'
				});
			}
		};

		var windowElement = angular.element($window);
		windowElement.resize(resizeBG);

		element.bind('load', function() {
			resizeBG();
		});
	}
});
*/