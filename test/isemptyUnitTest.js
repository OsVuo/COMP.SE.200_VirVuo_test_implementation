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

});
