var mongoose = require('mongoose');
const assert = require('chai').assert;
var expect = require('chai').expect;
// var User = require('../models/user');
const User = require('../public/javascripts/profile.js');
require('mocha-sinon');

// describe('errorTest1', function(){
// 	it('validateForms', function(){
// 		let x = User.errorTest1();
// 		assert.typeOf(x, 'string');
// 	});
// });


// const { expect } = require('chai');
// const chai = require('chai');
// const { JSDOM } = require('jsdom');
// chai.use(require('chai-dom'));
// require('jsdom-global')();

// describe('index.html', () => {
//   beforeEach((done) => {
//    JSDOM.fromFile('profile.js')
//    .then((dom) => {
//      global.document = dom.window.document
//    })
//  .then(done, done);
//  })
// describe("Level 1 heading", () => {
//  it("h1 element should say 'Hello World!'", () => {
//   const validationMessage = document.getElementById('validation-message');
//   expect(validationMessage.textContent).to.have.text("Passwords match!");
//  })
// })
// })

//^^TRIED TO IMPLEMENT TEST ON DOCUMENT ELEMENTS BUT WOULD NOT RECOGNIZE profile.js


// const assert = require('chai').assert;
// var expect = require('chai').expect;
// const errorTest = require('../public/javascripts/profile.js').errorTest;
// require('mocha-sinon');

// // describe('App', function(){
// // 	it('app should return hello', function(){
// // 		let x = sayHello()
// // 		assert.equal(x, 'hello');
// // 	});
// // });

// // describe('isLoggedIn', function(){
// // 	it('log works', function(){
// // 		let x = isLoggedIn();
// // 		assert.equal(x, res.redirect('/login'));
// // 	});
// // });

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
