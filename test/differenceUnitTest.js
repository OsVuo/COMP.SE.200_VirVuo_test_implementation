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
        myExpect(difference([2,1], [2,3])).deep.to.eq([1]);
    });

    it('should return an empty array if both arrays are identical', function(){
        myExpect(difference([2,1], [2,1])).deep.to.eq([]);
    });
    it('should return an the original array if comparing with an empty array', function(){
        myExpect(difference([2,1], [])).deep.to.eq([2,1]);
    });
    it('should return an empty array if the first array is empty', function(){
        myExpect(difference([], [2,3])).deep.to.eq([]);
    });
    it('should work with with other values besides integers', function(){
        myExpect(difference([1,2,NaN,"b"], ["b",3,NaN])).deep.to.eq([1,2]);
    });
    it('return an empty array without Arrays', function(){
        myExpect(difference(2, ["b",3,NaN])).deep.to.eq([]);
    }); 
    it('should ', function(){
        myExpect(difference([1,2,NaN,"b"], 2)).deep.to.eq([1,2]);
    });     

});
