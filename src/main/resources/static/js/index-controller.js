(function() {
	var app = angular.module('index-controller', ['ngAnimate' ]);
app.controller('MainCtrl', MainCtrl);
MainCtrl.$inject = [ '$scope', '$timeout', 'QueueService' ];

function MainCtrl($scope, $timeout, QueueService) {
	var INTERVAL = 8000, slides = [ {
		id : "image00",
		src : "./images/main-banner00.jpg"
	}, {
		id : "image01",
		src : "./images/main-banner01.jpg"
	}, {
		id : "image02",
		src : "./images/main-banner02.jpg"
	}];

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
}

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
})();
