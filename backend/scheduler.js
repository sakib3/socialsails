var sails = require('sails');
var Twit = require('twit'); 
sails.load(function(){
	checkPosts();
})
function checkPosts(){
	Post.find()
	.where({
		scheduledfor:  {'<' : new Date()}
	})
	.populate('owner')
	.exec(function(err,posts){
		console.log(posts);
		posts.forEach(function(post){
			//sendTweet(post.message)

			
		})
	})
}
function sendTweet(token,secret,message){
			var T = new Twit({
			    consumer_key:         config.TWITTER_KEY, 
			    consumer_secret:      config.TWITTER_SECRET, 
			    access_token:         user.twitterToken, 
			    access_token_secret:  user.twitterSecret
			});
			// T.post('statuses/update', { 
			// 			status: message 
			// 		}, function(err, data, response) {
			//   			console.log(data,err);
			//   			res.status(200).end();
			// });
}
// setInterval(function(){
// 	console.log("I am the scheduler!");
// },1000);