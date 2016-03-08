(function(){
	'use strict';
	
	angular.module('tcsAppAng',['ngRoute'])
	.config(router);
	
	router.$inject = ['$routeProvider'];
	
	function router($routeProvider){
		
		$routeProvider.when('/',{
			templateUrl: 'views/home.html'			
		});	
	
		
		$routeProvider.when('/profile',{
			templateUrl: 'views/profile.html'			
		});
		
		$routeProvider.when('/about',{
			templateUrl: 'views/about.html'			
		});
		
		$routeProvider.when('/lists',{
			templateUrl: 'views/lists.html'			
		});
		
		$routeProvider.when('/search',{
			templateUrl: 'views/search.html'			
		});
		
	}
	
	
})();