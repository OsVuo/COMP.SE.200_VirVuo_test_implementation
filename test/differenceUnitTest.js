/**
 * Simple unit test where function difference is tested.
 * 
 * Unit test is given two arrays to compare. The first Array includes values. The values in the second array
 * are excluded from the first array and the first array is returned without these values
 * it should not round them up wrong
 */

import expect from "chai";

import difference from '../application/difference.js';

var myExpect = expect.expect;

describe('expect', function(){
    
    it('should exclude the values in the second array from the first array', function(){
        myExpect(ceil([2,1], [2,3])).to.equal([1]);
    });

    it('should return an empty array if both arrays are identical', function(){
        myExpect(ceil([2,1], [2,1])).to.equal([]);
    });
});