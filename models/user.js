const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
    email: {
        type: String,
        // required: true,
        // unique: true
    },
	age: {
		 type: String
        // required: true,
        // unique: true
},
	fullname:
	{
		type: String,
	},
	
    // address: {

    //     street: String,

    //     city: String,

    //     state: String,

    //     zip: Number

    // }
	


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
			
		type: Number}


	
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
