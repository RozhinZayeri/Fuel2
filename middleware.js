const ExpressError = require('./utils/ExpressError');
const User = require('./models/user');

// module.exports = {
// 	errorTest: function(){
// 		console.log('express error handling');
// 		// return 'hello';
// 	} 
// }


//CANNOT TEST THIS FILE BECAUSE OF USE OF OUTSIDE EXPRESS PACKAGES LIKE ISAUTHENTICATED AND USERSCHEMA 
//BUT EACH FUNCTION INCLUDES ITS OWN ERROR HANDLING ESPECIALLY WITH THE EXPRESS ERROR HANDLING PACKAGE

module.exports.isLoggedIn = (req, res, next) => {
	if (!req.isAuthenticated()) {
        req.session.returnTo = req.originalUrl
        req.flash('error', 'You must be signed in first!');
        return res.redirect('/login');
    }
    next();
}


module.exports.validateUser = (req, res, next) => {
    // console.log('hello');
	const { error } = userSchema.validate(req.body);
    console.log(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',')
        throw new ExpressError(msg, 400)
    } else {
        next();
    }
}
