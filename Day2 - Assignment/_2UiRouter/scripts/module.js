(function(){
	'use strict';
	
	angular.module('tcsAppAng',['ui.router'])
	.config(router);
	
	router.$inject = ['$stateProvider', '$urlRouterProvider'];
	
	function router($stateProvider, $urlRouterProvider){
		
		$urlRouterProvider.otherwise('/home');
		
		$stateProvider   
			.state('home', {
				url: '/home',
				templateUrl: 'views/home.html'
			});
			
		$stateProvider   
			.state('profile', {
				url: '/profile',
				templateUrl: 'views/profile.html'
			});
			
			$stateProvider   
			.state('about', {
				url: '/about',
				templateUrl: 'views/about.html'
			});
			
			$stateProvider   
			.state('lists', {
				url: '/lists',
				templateUrl: 'views/lists.html'
			});
			
			$stateProvider   
			.state('search', {
				url: '/search',
				templateUrl: 'views/search.html'
			});	

		//
		$stateProvider   
			.state('search.page1', {
				url: '/search',
				templateUrl: 'views/page1.html'
			});	

		$stateProvider   
			.state('search.page2', {
				url: '/search',
				templateUrl: 'views/page2.html'
			});				
	}
	
})();