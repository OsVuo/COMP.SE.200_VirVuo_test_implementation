/**
 * Simple unit test where function isObjectlike is tested.
 * 
 * function should return true or false depending on whether an object is entered
 */

import expect from "chai";

import isObjectLike from '../application/isObjectLike.js';

var myExpect = expect.expect;

describe('isObjectLike', function(){
    
    it('should return false if null is entered', function(){
        myExpect(isObjectLike(null)).to.eq(false);
    });

    it('should return false if true is entered', function(){
        myExpect(isObjectLike(true)).to.eq(false);
    });    
    it('should return false if an integer is entered', function(){
        myExpect(isObjectLike(1432)).to.eq(false);
    });
    it('should return true if a non empty array is entered', function(){
        myExpect(isObjectLike([1,2,3])).to.eq(true);
    });
    it('should return true if an empty array is entered', function(){
        myExpect(isObjectLike([])).to.eq(true);
    });
    it('should return true if a non empty map is entered', function(){
        myExpect(isObjectLike({'a': 1})).to.eq(true);
    });
    it('should return true if an empty map is entered', function(){
        myExpect(isObjectLike({})).to.eq(true);
    });   
    it('should return false if a string is entered', function(){
        myExpect(isObjectLike("abc kissa kavelee")).to.eq(false);
    });  
    it('should return false if an empty string is entered', function(){
        myExpect(isObjectLike("")).to.eq(false);
    });  
    it('should return false if Function is entered', function(){
        myExpect(isObjectLike(Function)).to.eq(false);
    });  



});
