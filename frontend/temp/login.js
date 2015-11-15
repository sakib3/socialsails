angular.module("app").controller("Login",function($scope,$auth,$http){
	$scope.login = function(){
		$auth.authenticate('twitter');
	}
	$scope.isAuthenticated = $auth.isAuthenticated;
	$scope.tweet = function(){
		$http.post('/api/post/tweet',{message: $scope.message}).then(function(){
			$scope.message = '';
		});
	}
	$scope.logout = function () {
		$auth.logout();
	}

	$scope.minDate = new Date();
	$scope.opened = false;
	$scope.open = function($event){
		$event.preventDefault();
		$event.stopPropagation();
		$scope.opened = !$scope.opened;
	}
})