/**
 * Simple unit test where function isempty is tested.
 * 
 * function should return true or false depending on whether the object that it examines is empty
 */

import expect from "chai";

import isEmpty from '../application/isEmpty.js';

var myExpect = expect.expect;

describe('isEmpty', function(){
    
    it('should return true if null is entered', function(){
        myExpect(isEmpty(null)).to.eq(true);
    });

    it('should return true if true is entered', function(){
        myExpect(isEmpty(true)).to.eq(true);
    });    
    it('should return true if an integer is entered', function(){
        myExpect(isEmpty(12341)).to.eq(true);
    });
    it('should return false if a non empty array is entered', function(){
        myExpect(isEmpty([1,2,3])).to.eq(false);
    });
    it('should return true if an empty array is entered', function(){
        myExpect(isEmpty([])).to.eq(true);
    });
    it('should return false if a non empty map is entered', function(){
        myExpect(isEmpty({'a': 1})).to.eq(false);
    });
    it('should return true if an empty map is entered', function(){
        myExpect(isEmpty({})).to.eq(true);
    });   
    it('should return false if a string is entered', function(){
        myExpect(isEmpty("abc kissa kavelee")).to.eq(false);
    });  
    it('should return true if an empty string is entered', function(){
        myExpect(isEmpty("")).to.eq(true);
    });  

});
