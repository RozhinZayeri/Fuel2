const assert = require('chai').assert;
var expect = require('chai').expect;
const errorTest = require('../middleware').errorTest;
require('mocha-sinon');

// describe('App', function(){
// 	it('app should return hello', function(){
// 		let x = sayHello()
// 		assert.equal(x, 'hello');
// 	});
// });

// describe('isLoggedIn', function(){
// 	it('log works', function(){
// 		let x = isLoggedIn();
// 		assert.equal(x, res.redirect('/login'));
// 	});
// });

// describe('errorTest', function() {

//   beforeEach(function() {
//     this.sinon.stub(console, 'log');
//   });

//   it('express error handling', function() {
//     errorTest();
//     expect( console.log.calledOnce ).to.be.true;
//     expect( console.log.calledWith('express error handling') ).to.be.true;
//   });
	
// });