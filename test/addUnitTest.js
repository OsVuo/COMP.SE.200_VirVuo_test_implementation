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
    
    it('should add two numbers correctly', function(){
       myAssert.equal(add(2, 2), 4);
    });
    it('add two numbers should not equal', function(){
        myExpect(add(2,2)).to.not.equal(5);
    });
    
    it('should add two large numbers correctly', function(){
        myAssert.equal(add(123456789011223344556677889900, 123456789011223344556677889900), 246913578022446689113355779800);
    });
    it('should add two negative numbers correctly', function(){
        myAssert.equal(add(-5, -5), -10);
    });
    it('should throw an error when given two illiegal arguments', function(){
        const illiegalArgumentsAdd = () => add('a', 'b');
        myExpect(illiegalArgumentsAdd).to.throw();
    });
    it('should throw an error when given no arguments', function(){
        const noArgumentsAdd = () => add();
        myExpect(noArgumentsAdd).to.throw();
    });
});
