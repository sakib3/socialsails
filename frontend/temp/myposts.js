angular.module('app').controller('MyPosts',function($scope,$http){
	$http.post('/api/post/myPosts').then(function(posts){
		$scope.posts = posts.data;
	})
});