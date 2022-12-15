/**
 * Simple unit test where dunction add is tested.
 * 
 * add should add numbers correctly
 * should not add them wrong
 * incase of faulty input, should throw err
 */

import expect from "chai";
import assert from "chai";

import add from '../application/add.js';

// in order to get istanbul (nrc) working we need require() statements.....
//var add = require('../application/add.js');
//var assert = require('chai').assert;
//var expect = require('chai').expect;


var myAssert = assert.assert;
var myExpect = expect.expect;

describe('Add', function(){
    
    it('should add two two numbers correctly', function(){
       myAssert.equal(add(2, 2), 4);
    });
    it('add two numbers should not equal', function(){
        myExpect(add(2,2)).to.not.equal(5);
    });
    //it('should throw an error', function(){
    //    myExpect(add('a', 'b')).to.throw();
    //});
});
