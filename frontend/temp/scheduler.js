angular.module("app").controller("Scheduler",function($scope,$auth,$http){
	
	
	
	$scope.tweet = function(){

		var datetime = new Date(
			$scope.date.getFullYear(),
			$scope.date.getMonth(),
			$scope.date.getDate(),
			$scope.date.getHours(),
			$scope.date.getMinutes()
		);
		$http.post('/api/post/tweet',{
				message: $scope.message,
				datetime: datetime
		})
		.then(function(){
					$scope.message = '';
		});
	}
	
	$scope.time = new Date();

	$scope.minDate = new Date();
	
	$scope.opened = false;
	
	$scope.open = function($event){
		$event.preventDefault();
		$event.stopPropagation();
		$scope.opened = !$scope.opened;
	}
	
})