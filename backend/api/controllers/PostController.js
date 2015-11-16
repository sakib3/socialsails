/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */


module.exports = {
	// make an endpoins
	tweet: function(req,res){
		User.findOne(req.userId,function(err,user){
			var message = req.body.message;
			var datetime = req.body.scheduledfor;
			Post.create({
				message: message,
				scheduledfor: datetime,
				owner: req.userId
			}).exec(function(err,post){
				console.log("working",post,err);
				res.send(200).end();
			})			
		})
	},
	myPosts: function(req,res){
		Post.find({owner: req.userId}, function(err, posts){
			res.json(posts);
		})
	}
};

