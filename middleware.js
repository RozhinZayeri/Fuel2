const ExpressError = require('./utils/ExpressError');
const User = require('./models/user');

// module.exports = {
// 	sayHello: function(){
// 		console.log('hello');
// 		// return 'hello';
// 	} 
// }

module.exports.isLoggedIn = (req, res, next) => {
	if (!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl
        req.flash('error', 'You must be signed in first!');
        return res.redirect('/login');
    }
    next();
}


module.exports.validateUser = (req, res, next) => {
    const { error } = userSchema.validate(req.body);
    console.log(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    } else {
        next();
    }
}
