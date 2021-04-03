var mongoose = require('mongoose');
const assert = require('chai').assert;
var expect = require('chai').expect;
var User = require('../models/user');
//const renderRegister = require('../controllers/users').renderRegister;
require('mocha-sinon');

// describe('errorTest1', function(){
// 	it('controllers user', function(){
// 		let x = User.errorTest1();
// 		assert.typeOf(x, 'string');
// 	});
// });

// describe('renderRegister', function() {

//   beforeEach(function() {
//     this.sinon.stub(console, 'log');
//   });

//   it('express error handling', function() {
//     renderRegister();
//     expect( console.log.calledOnce ).to.be.true;
//     expect( console.log.calledWith('express error handling') ).to.be.true;
//   });
	
// });
