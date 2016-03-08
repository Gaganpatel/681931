(function(){
	'use strict';
	
	angular.module('MyApp')
	.controller('HomeCtrl', HomeCtrl);
	
	HomeCtrl.$inject = ['$scope'];
	
	function HomeCtrl($scope){
		$scope.title = "Hello Ther !";
		$scope.description = function()
		{
			return "This is the home page"
		};
	};

		
})();