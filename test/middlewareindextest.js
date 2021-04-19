const assert = require('chai').assert;
var expect = require('chai').expect;
const errorTest1 = require('../middleware/index.js').errorTest1;
const isValidPassword = require('../middleware/index.js').isValidPassword;
require('mocha-sinon');


// describe('isValidPassword', function() {

//   beforeEach(function() {
//     this.sinon.stub(console, 'log');
//   });

//   it('isValidPassword works', function() {
//     isValidPassword();
//     expect( console.log.calledOnce ).to.be.true;
//     expect( console.log.calledWith('isValidPassword') ).to.be.true;
//   });
	
// });

// describe('errorTest1', function(){
// 	it('middleware index', function(){
// 		let x = errorTest1();
// 		assert.equal(x, 'express error handling');
// 	});
// });

// describe('errorTest1', function() {

//   beforeEach(function() {
//     this.sinon.stub(console, 'log');
//   });

//   it('middleware index works', function() {
//     errorTest1();
//     expect( console.log.calledOnce ).to.be.true;
//     expect( console.log.calledWith('express error handling') ).to.be.true;
//   });
	
// });
