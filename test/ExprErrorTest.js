var mongoose = require('mongoose');
const assert = require('chai').assert;
var expect = require('chai').expect;
// var User = require('../models/user');
const User = require('../utils/ExpressError.js');
require('mocha-sinon');

describe('errorTest1', function(){
	it('validateForms', function(){
		let x = User.errorTest1();
		assert.typeOf(x, 'string');
	});
});