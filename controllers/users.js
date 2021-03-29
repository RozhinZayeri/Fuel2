const User = require('../models/user');

module.exports.renderRegister = (req, res) => {
    res.render('users/register');
}

module.exports.register = async (req, res, next) => {
    try {
        const { email, username, password } = req.body;
        const user = new User({ email, username });
        const registeredUser = await User.register(user, password);
        req.login(registeredUser, err => {
            if (err) return next(err);
            req.flash('success', 'Welcome!');
            // res.redirect('/test');
			// res.redirect("/users/user._id/edit");
			res.redirect("/users/edit");
			// res.redirect("/:id/edit");
        })
    } catch (e) {
        req.flash('error', e.message);
        res.redirect('register');
    }
}

module.exports.renderLogin = (req, res) => {
    res.render('users/login');
}

module.exports.login = (req, res) => {
    req.flash('success', 'welcome back!');
    const redirectUrl = req.session.returnTo || '/';
    delete req.session.returnTo;
    res.redirect(redirectUrl);
}

module.exports.logout = (req, res) => {
    req.logout();
    // req.session.destroy();
    req.flash('success', "Goodbye!");
    res.redirect('/');
}
















//==================================== COLT CAMPGROUND.JS

// module.exports.showUser = async (req, res,) => {
//     const user = await User.findById(req.params.id).populate({
//         // path: 'reviews',
//         populate: {
//             path: 'author'
//         }
//     }).populate('author');
//     if (!user) {
//         req.flash('error', 'Cannot find that user!');
//         return res.redirect('/users');
//     }
//     res.render('users/profile', { user });
// }

// module.exports.renderEditForm = async (req, res) => {
//     const { id } = req.params;
//     const user = await User.findById(id)
//     if (!user) {
//         req.flash('error', 'Cannot find that user!');
//         return res.redirect('/users');
//     }
//     // res.render('users/edit', { user });
// 	 res.render('users/profile', { user });
// }

// module.exports.updateUser = async (req, res) => {
//     const { id } = req.params;
//     console.log(req.body);
//     const user = await User.findByIdAndUpdate(id, { ...req.body.user });
    
//     await user.save();
//     req.flash('success', 'Successfully updated user!');
//     res.redirect(`/users/${user._id}`)
// }

//=================================================COLT













