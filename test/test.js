const assert = require('chai').assert;
var expect = require('chai').expect;
const isLoggedIn = require('../middleware').isLoggedIn;
// require('mocha-sinon');

// describe('App', function(){
// 	it('app should return hello', function(){
// 		let x = 'hello'
// 		assert.equal(sayHello(), 'hello');
// 	});
// });

describe('isLoggedIn', function(){
	it('log works', function(){
		let x = isLoggedIn();
		assert.equal(x, res.redirect('/login'));
	});
});

// describe('isLoggedIn', function() {

//   beforeEach(function() {
//     this.sinon.stub(console, 'log');
//   });

//   it('log works', function() {
//     isLoggedIn();
//     expect( console.log.calledOnce ).to.be.true;
//     expect( console.log.calledWith('logged in') ).to.be.true;
//   });
	
// });