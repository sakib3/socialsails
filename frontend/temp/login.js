angular.module("app").controller("Login",function($scope,$auth,$http){
	$scope.login = function(){
		$auth.authenticate('twitter');
	}
	$scope.isAuthenticated = $auth.isAuthenticated;
	$scope.tweet = function(){
		$http.post('/api/post/tweet','').then(function(){

		});
	}
})