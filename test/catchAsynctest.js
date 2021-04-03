var mongoose = require('mongoose');
const assert = require('chai').assert;
var expect = require('chai').expect;
// var User = require('../models/user');
const User = require('../public/javascripts/validateForms.js');
require('mocha-sinon');

// describe('errorTest1', function(){
// 	it('validateForms', function(){
// 		let x = User.errorTest1();
// 		assert.typeOf(x, 'string');
// 	});
// });



// const assert = require('chai').assert;
// var expect = require('chai').expect;
// const errorTest = require('../utils/catchAsync.js').errorTest;
// require('mocha-sinon');

// describe('errorTest', function() {

//   beforeEach(function() {
//     this.sinon.stub(console, 'log');
//   });

//   it('express error handling', function() {
//     errorTest();
//     expect( console.log.calledOnce ).to.be.true;
//     expect( console.log.calledWith('no name function cant test') ).to.be.true;
//   });
	
// });