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
        myExpect(divide(4,2)).to.equal(2);
    });

    it('dividing two numbers should not equal', function(){
        myExpect(divide(4,2)).to.not.equal(3);
    });
    
    it('should divide two large numbers correctly', function(){
        myExpect(divide(10000000000000000000000000,1000000000000000000000000)).to.equal(10);
    });
    it('should divide two negative numbers correctly', function(){
        myExpect(divide(-10,-5)).to.equal(2);
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
