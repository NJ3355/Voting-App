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
		
		$scope.pollAnswers = document.getElementById('answers');
		
		$scope.poll = {
			question: '',
			answers: []
		};

		$scope.choices = [];

	//Available shifts main functions

	$scope.addAnswer = function(shift){
		var node = document.createElement("LI");
		var textnode = document.createElement("input");
		textnode.setAttribute('type', 'text');
		textnode.setAttribute('ng-model', $scope.choices.length);
		node.appendChild(textnode);
		
		$scope.pollAnswers.appendChild(node);



		/*var i = $scope.choices.length;
		$scope.pollAnswers.innerHTML += "<li><input type='text' ng-model='choices[" + i + "]'  /></li>";	
		console.log($scope.choices.length);	*/
	};

	$scope.createPoll = function() {
		console.log($scope.pollAnswers.child.length);

		for(var i = 0; i < $scope.choices.length; i++ )
		$scope.poll.answers.push({
			answer: $scope.choices[i],
			score: 0
		});

	console.log($scope.poll);
	};




}]);


