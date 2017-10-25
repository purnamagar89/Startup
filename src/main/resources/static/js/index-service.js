(function() {
	var app = angular.module('xanrup-app');

	app.factory('QueueService', QueueService);

	function QueueService($rootScope) {
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
	}

}());
