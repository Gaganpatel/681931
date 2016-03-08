(function(){
	'use strict';
	
	angular.module('tcsAppAngular')
	.controller('listCtrl', listCtrl);
	
	listCtrl.$inject = ['$scope'];
	
	
	function listCtrl($scope){
		var values = [];
		
		$scope.setColor = function(){
			values = ['Red','Blue','White'];
		}
		
		$scope.setState = function(){
			values = ['Karnataka','MP','UP', 'Andra Pradesh'];
		};
		
		$scope.getValues = function(){	
			return values;		
	};
			
 };
		
})();