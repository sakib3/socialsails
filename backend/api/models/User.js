/**
* User.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
 
//schema type 'string' instead of String is chnaged to make it functional for waterline in backend
  attributes: {
  	email: { 
  		type: 'string', 
  		unique: true, 
  		lowercase: true 
  	},
	displayName: 'string',
	twitter: 'string'
  }
};

