angular.module('app.router', [])

.config(function($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('tab', {
			url: '/tab',
			abstract: true,
			templateUrl: 'templates/tabs.html'
		})
		.state('tab.topic', {
			url: '/topic',
			views: {
				'tab-topic': {
					templateUrl: 'templates/topic/tab-topic.html'
				}
			}
		})
		.state('tab.found', {
			url: '/found',
			views: {
				'tab-found': {
					templateUrl: 'templates/found/tab-found.html'
				}
			}
		})
		.state('tab.persion', {
			url: '/persion',
			views: {
				'tab-persion': {
					templateUrl: 'templates/persion/tab-persion.html'
				}
			}
		})

	$urlRouterProvider.otherwise('/tab/topic');
});