var votingApp = angular.module('votingApp', ['ngRoute', 'ngAnimate']);

/*votingApp.config(['$routeProvider', function($routeProvider){

	$routeProvider
		.when('/home', {
			templateUrl: 'views/home.html',
			controller: 'scheduleController'
		})
		.when('/contact', {
			templateUrl: 'views/contact.html',
			controller: 'ContactController'
		})
		.when('/contact-success', {
			templateUrl: 'views/contact-success.html',
			controller: 'ContactController'
		})
		.when('/available', {
			templateUrl: 'views/available.html',
			controller: 'ScheduleController'
		})
		.when('/myshifts', {
			templateUrl: 'views/myshifts.html',
			controller: 'ScheduleController'
		})
		.otherwise({
			redirectTo: '/home'
		});

}]);*/

/*votingApp.directive('randomNinja', [function(){

	return {
		restrict: 'E',
		scope: {
			ninjas: '=',
			title: '='
		},
		templateUrl: 'views/random.html',
		transclude: true,
		replace:true,
		controller: function($scope){
			$scope.random =  Math.floor(Math.random() * 3)

		}
	};

}]);*/

votingApp.controller('VotingController', ['$scope', '$http', function($scope, $http){
		
	
		$scope.hello = 'hell12312o';
		$scope.poll = {
			question: 'hello',
			answers: []
		};

	//Available shifts main functions

	$scope.removeShift = function(shift){
		var removeShift = $scope.shifts.indexOf(shift);
		
		shift.available = false;
		$scope.myShifts.push(shift);
		$scope.shifts.splice(removeShift, 1);

		
	};





}]);


