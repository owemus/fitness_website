var HeaderController = function ($rootScope, $scope, $http)
{
	$rootScope.$on('$routeChangeSuccess', function(evt, next, current)
	{
		$("html, body").animate({
			scrollTop: 0
		}, 0);
	});

	$rootScope.$on('$routeChangeStart', function(evt, next, current)
	{
		switch(next.$$route.originalPath)
		{
			case '/':
				$scope.url = 'home';
				break;
			case '/about':
				$scope.url = 'about';
				break;
			case '/classes':
				$scope.url = 'classes';
				break;
			case '/team':
				$scope.url = 'team';
				break;
			case '/contact':
				$scope.url = 'contact';
				break;
		}
	});


};

angular.module('myApp').controller('HeaderController', [
	'$rootScope',
	'$scope',
	'$http',
	HeaderController
]);