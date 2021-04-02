const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({

	fullname:
	{
		type: String,
	},
        street: 
		{	type: String },

        city:
			{ type: String},

        state:
			{type: String},

        zipcode:{
			
		type: Number},
	
	
	 street2: 
		{	type: String },

        city2:
			{ type: String},

        state2:
			{type: String},

        zipcode2:{
			
		type: Number},
	
	
		quotes: {
			type: String
		}	
});

UserSchema.plugin(passportLocalMongoose);

module.exports = {
	errorTest1: function(){
		// console.log('express error handling');
		return 'express error handling';
	}
}

module.exports = mongoose.model('User', UserSchema);
