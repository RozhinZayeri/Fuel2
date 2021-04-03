const express = require('express');
const router = express.Router();
const passport = require('passport');
const catchAsync = require('../utils/catchAsync');
const User = require('../models/user');
const users = require('../controllers/users');
const {
	asyncErrorHandler,
	isLoggedIn,
	isValidPassword,
	isAuthor,
} = require('../middleware');


// module.exports = {
// 	errorTest1: function(){
// 		// console.log('express error handling');
// 		return 'express error handling';
// 	}
// }

// module.exports = {
// 	errorTest: function(){
// 		console.log('express error handling');
// 		// return 'hello';
// 	} 
// }


//CANNOT TEST THIS FILE BECAUSE NONE OF THESE FUNCTIONS HAVE NAMES, ALL GET AND PUT
//BUT EACH FUNCTION INCLUDES ITS OWN ERROR HANDLING


// router.route('/register')
//     .get(users.renderRegister)
//     .post(catchAsync(users.register));

// router.route('/login')
//     .get(users.renderLogin)
//     .post(passport.authenticate('local', { failureFlash: true, failureRedirect: '/login' }), users.login)

// router.get('/logout', users.logout)




// //===============================================jadid

// // User profile
router.get("/users/:id", isLoggedIn, (req, res) => {
  User.findById(req.params.id, (err, foundUser) => {
    if (err || !foundUser) {
      req.flash("error", "Something went wrong...");
      res.redirect("/");
    } else {
          res.redirect("/");

    }
  });
});

// show edit form
router.get("/:id/edit", isLoggedIn, (req, res) => {
  User.findById(req.params.id, (err, foundUser) => {
    if (err || !foundUser) { return res.redirect("back"); }
    if (foundUser._id.equals(req.user._id)) {
      res.render("users/edit", { user: foundUser }); 
	  // res.render("/fuelq", { user: foundUser }); 
    } else { 
      req.flash("error", "You don't have permission to do that");
      res.redirect("back");
		console.log("a3");
    } 
  });
});




router.get("/:id/fuelQuote", isLoggedIn, (req, res) => {
  User.findById(req.params.id, (err, foundUser) => {
    if (err || !foundUser) { return res.redirect("back"); }
    if (foundUser._id.equals(req.user._id)) {
      res.render("users/fuelQuote", { user: foundUser }); 
	  // res.render("/fuelq", { user: foundUser }); 
    } else { 
      req.flash("error", "You don't have permission to do that");
      res.redirect("back");
		console.log("a9");
    } 
  });
});


router.get("/:id/fuelhistory", isLoggedIn, (req, res) => {
  User.findById(req.params.id, (err, foundUser) => {
    if (err || !foundUser) { return res.redirect("back"); }
    if (foundUser._id.equals(req.user._id)) {
      res.render("users/fuelhistory", { user: foundUser }); 
	  // res.render("/fuelq", { user: foundUser }); 
    } else { 
      req.flash("error", "You don't have permission to do that");
      res.redirect("back");
		console.log("a9");
    } 
  });
});







// update profile
router.put("/:id", isLoggedIn, (req, res) => {
  User.findByIdAndUpdate(req.params.id, req.body.user, (err, updatedUser) => {
    if (err) {
      if (err.name === 'MongoError' && err.code === 11000) {
        // Duplicate email
        req.flash("error", "That email has already been registered.");
        return res.redirect("/users" + req.params.id);
		  console.log("b0");
		// return res.redirect("/fuelq");
      } 
      // Some other error
      req.flash("error", "Something went wrong...");
      return res.redirect("/users" + req.params.id);
		console.log("b1");
    }
    if (updatedUser._id.equals(req.user._id)) {
      res.redirect("/users/" + req.params.id);
		// res.redirect("/fuelq");
		console.log("b2");
    } else {
      req.flash("error", "You don't have permission to do that");
	console.log("b3");
      res.redirect("/");
    }
  });
});

//===========================================jadid























//================================COLT

// router.route('/')
//     .get(catchAsync(users.index))
//     .post(isLoggedIn, catchAsync(users.createUser))


// router.get('/new', isLoggedIn, campgrounds.renderNewForm)

// router.route('/:id')
//     .get(catchAsync(users.showUser))
//     .put(isLoggedIn, isAuthor, catchAsync(users.updateUser))
//     // .delete(isLoggedIn, isAuthor, catchAsync(campgrounds.deleteCampground));

// router.get('/:id/profile', isLoggedIn, isAuthor, catchAsync(users.renderEditForm))

//===================================COLT














// USER PROFILE
//========================================================================kaar mikone
// router.get("/profile", function(req, res) {
//   User.findById(req.params.id, function(err, foundUser) {
//     if(err) {
//       req.flash("error", "Something went wrong.");
//       return res.redirect("/");
//     }
//       res.render("users/profile", {user: foundUser});
//     })
// });



// router.put('/:id', async (req, res) => {
//   let author
//   try {
//     author = await Author.findById(req.params.id)
//     author.name = req.body.name;
// 	author.email=req.body.email;
//     await author.save()
//     // res.redirect(`/users/${author.id}`)
// 	  res.redirect("/profile")
//   } catch {
//     if (author == null) {
//       res.redirect('/')
//     } else {
//       // res.render('users/profile', {
// 		res.render('profile', {
//         author: author,
//         errorMessage: 'Error updating Author'
//       })
//     }
//   }
// })

// ===================================================================




// module.exports = {
// 	errorTest2: function(){
// 		console.log('express error handling');
// 		// return 'hello';
// 	}
// 	// router,
// }
module.exports = router;




