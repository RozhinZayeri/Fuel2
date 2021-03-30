const User = require('../models/user');

module.exports = {
	asyncErrorHandler: (fn) =>
		(req, res, next) => {
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






