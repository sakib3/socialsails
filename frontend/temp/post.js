angular.module("app").controller("Post",function($scope,$http,$location,toastr){
	
	var id = $location.search().id;
	 
	
	$scope.time = new Date();

	$scope.minDate = new Date();
	
	$scope.opened = false;
	
	$scope.delete = deletePost;
	
	$scope.open = function($event){
		$event.preventDefault();
		$event.stopPropagation();
		$scope.opened = !$scope.opened;
	}
	function getPost(){
		$http.get('/api/post/' +id).then(function(post){
			$scope.message = post.data.message;
			//$scope.date = post.data.datetime;
			
			var datetime = new Date(post.data.datetime);
			$scope.date = datetime;
			$scope.time = datetime;
		});
	}

	if (isEditingPost()) {
		$scope.isEditing = true;
		getPost();
		$scope.save = editPost;
	} else {
		$scope.save = newPost
	}

	function newPost() {

		var datetime = new Date($scope.date.getFullYear(), $scope.date.getMonth(), $scope.date.getDate(), $scope.time.getHours(), $scope.time.getMinutes());

		$http.post('/api/post/tweet', {
			message: $scope.message,
			datetime: datetime
		}).then(function () {
			$scope.message = '';
			toastr.info("New post created!");
		});
	}
	
	function editPost() {
		var datetime = new Date($scope.date.getFullYear(), $scope.date.getMonth(), $scope.date.getDate(), $scope.time.getHours(), $scope.time.getMinutes());
		//waterline function by default ..update/
		$http.post('/api/post/update/' + id, {
			message: $scope.message,
			datetime: datetime
		}).then(function () {
			toastr.success("Post Updated!");
		});
	}

	function deletePost() {
		var datetime = new Date($scope.date.getFullYear(), $scope.date.getMonth(), $scope.date.getDate(), $scope.time.getHours(), $scope.time.getMinutes());
		//waterline function by default ..delete/
		$http.post('/api/post/destroy/' + id).then(function(){
			toastr.error("Post Deleted!");
		});
	}
	
	function isEditingPost(){
		return id;
	}
	
});


