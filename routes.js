angular.module('myApp').config(function($routeProvider)
{
	$routeProvider

	// Example Route
	.when('/', {
		templateUrl:'./views/home.html',
	})
	.when('/about', {
		templateUrl:'./views/about.html',
	})
	.when('/classes', {
		templateUrl:'./views/classes.html',
	})
	.when('/team', {
		templateUrl:'./views/team.html',
	})
	.when('/contact', {
		templateUrl:'./views/contact.html',
	})
	
	.otherwise({
		redirectTo:'/'
	});
});