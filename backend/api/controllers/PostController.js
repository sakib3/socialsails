/**
 * PostController
 *
 * @description :: Server-side logic for managing posts
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var Twit = require('twit');
module.exports = {
	// make an endpoins
	tweet: function(req,res){

		var T = new Twit({
		    consumer_key:         config.TWITTER_KEY, 
		    consumer_secret:      config.TWITTER_SECRET, 
		    access_token:         '4185741915-RMPRncECRzeccmlC9vnpMd8xT1sS0wTHgipy6Nh', 
		    access_token_secret:  'wnXn6sF2Rq0uX7Iden7yYo6FYz8IOnt59dwE8jp7ZbuZe'
		});

		T.post('statuses/update', { status: 'hello world!' }, function(err, data, response) {
		  console.log(data,err);
		});
	}
};

