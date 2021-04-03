var mongoose = require('mongoose');
const assert = require('chai').assert;
var expect = require('chai').expect;
// var User = require('../models/user');
const User = require('../models/user');
require('mocha-sinon');

// describe('errorTest1', function(){
// 	it('models user', function(){
// 		let x = User.errorTest1();
// 		assert.typeOf(x, 'string');
// 	});
// });

// describe ('User',function(){

//     before(function (done) {
//         mongoose.connect('mongodb://localhost/mongoose_basics');
//         const db = mongoose.connection;
//         db.on('error', console.error.bind(console, 'connection error'));
//         db.once('open', function() {
//           console.log('We are connected to test database!');
//           done();
//         });
//       });

//     it('User works!',function(){
//         var s = new User({fullname:'krishna'});

//         s.save(err => {
//             if(err) { return done(); }
//             throw new Error('Should generate error!');
//           });

//     });
//     after(function(done){
//         mongoose.connection.db.dropDatabase(function(){
//           mongoose.connection.close(done);
//         });
//       });

// });


