var votingApp = angular.module('votingApp', ['ngRoute', 'ngAnimate']);

votingApp.config(['$routeProvider', function($routeProvider){

	$routeProvider
		.when('/create', {
			templateUrl: 'views/create.html',
			controller: 'VotingController'
		})
		.when('/poll', {
			templateUrl: 'views/poll.html',
			controller: 'VotingController'
		})
		/*.when('/contact-success', {
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
		})*/
		.otherwise({
			redirectTo: '/create'
		});

}]);

votingApp.directive('answers', [function(){

    return {
      restrict: 'E',
      scope: {
        choices: '='
      },
      template: '<li ng-repeat="answer in choices track by $index"><input type="text" ng-model="choices[$index]" /></li>'
    };

}]);

votingApp.controller('VotingController', ['$scope', '$location', function($scope, $location){
		
		$scope.pollAnswers = document.getElementById('answers');
		
		$scope.poll = {
			question: '',
			totalVotes: 0,
			answers: []
		};

		$scope.choices = [];
	//Available shifts main functions

	$scope.addAnswer = function(){
	
	
		$scope.choices.push('');



	};

	$scope.createPoll = function() {
		$scope.poll.question = $scope.pollQuestion;

		for(var i = 0; i < $scope.choices.length; i++ )
		$scope.poll.answers.push({
			answer: $scope.choices[i],
			score: 0,
			percent: 0
		});

	console.log($scope.poll);
	};

	$scope.redirect = function(path){

		 $location.path(path);

	};

	$scope.vote = function(answer){
		answer.score++;
		answer.progress++
		$scope.poll.totalVotes++;

		$scope.calcPercent();
		

	};

	$scope.calcPercent = function(){
		

		for(var i = 0; i < $scope.poll.answers.length; i++){
			$scope.poll.answers[i].percent = Math.round(($scope.poll.answers[i].score/$scope.poll.totalVotes) * 100);
		}

	};




}]);


