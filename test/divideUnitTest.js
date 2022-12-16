/**
 * Simple unit test where function divide is tested.
 * 
 * divide should divide numbers correctly
 * should not divide them wrong
 */

import expect from "chai";

import divide from '../application/divide.js';

var myExpect = expect.expect;

describe('Divide', function(){
    
    it('should divide two numbers correctly', function(){
        myExpect(divide(1,1)).to.equal(1);
    });

    it('dividing two numbers should not equal', function(){
        myExpect(divide(4,2)).to.not.equal(1);
    });
    
    it('should divide two large numbers correctly', function(){
        myExpect(divide(10, 1)).to.equal(10);
    });
    it('should divide two negative numbers correctly', function(){
        myExpect(divide(-10,-5)).to.equal(2);
    });
});
