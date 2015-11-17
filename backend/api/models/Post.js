/**
* Post.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
connection:'someMysqlServer',
  attributes: {
  	message: 'string',
  	scheduledfor: 'datetime',
  	isPosted: 'boolean',
  	owner:{
  		model: 'user'
  	}
  }
};

