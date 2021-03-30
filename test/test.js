
const assert = require('chai').assert;
const isLoggedIn = require('../middleware').isLoggedIn;
// require('mocha-sinon');

// describe('App', function(){
// 	it('app should return hello', function(){
// 		let x = 'hello'
// 		assert.equal(app(), 'hello');
// 	});
// });

// describe('App', function(){
// 	it('app should return hello', function(){
// 		let x = 'hello'
// 		assert.equal(x, 'hello');
// 	});
// });

describe('isLoggedIn()', function() {

  // beforeEach(function() {
  //   this.sinon.stub(console, 'log');
  // });

  it('should log "Good morning" for hours < 12', function() {
    isLoggedIn();
    expect( console.log.calledOnce ).to.be.true;
    expect( console.log.calledWith('logged in') ).to.be.true;
  });

});