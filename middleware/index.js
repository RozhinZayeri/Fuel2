const User = require('../models/user');


// module.exports = {
// 	errorTest1: function(){
// 		// console.log('express error handling');
// 		return 'express error handling';
// 	} 
// }
//CANNOT TEST THIS FILE BECAUSE OF USE OF OUTSIDE EXPRESS PACKAGES LIKE ISAUTHENTICATED AND USERSCHEMA 
//BUT EACH FUNCTION INCLUDES ITS OWN ERROR HANDLING ESPECIALLY WITH THE EXPRESS ERROR HANDLING PACKAGE

module.exports = {
	errorTest1: function(){
		// console.log('express error handling');
		return 'express error handling';
	}, 
	asyncErrorHandler: (fn) =>
		(req, res, next) => {
		//console.log('asyncErrorHandler');
			Promise.resolve(fn(req, res, next))
						 .catch(next);
		},
	isLoggedIn: (req, res, next) => {
		if (req.isAuthenticated()) return next();
		req.session.error = 'You need to be logged in to do that!';
		req.session.redirectTo = req.originalUrl;
		res.redirect('/login');
	},
	isValidPassword: async (req, res, next) => {
		console.log('isValidPassword');
		const { user } = await User.authenticate()(req.user.username, req.body.currentPassword);
		if (user) {
			// add user to res.locals
			res.locals.user = user;
			next();
		} else {
			req.session.error = 'Incorrect current password!';
			return res.redirect('/profile');
		}
	},
}






