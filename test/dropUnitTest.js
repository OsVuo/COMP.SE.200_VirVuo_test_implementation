import expect from "chai";
import assert from "chai";

import drop from '../application/drop.js';


var myExpect = expect.expect;


describe('Drop', function(){
    it('should drop elements the way described in drop documentation with no number param', function(){
        myExpect(drop([1, 2, 3])).to.eql([2, 3]);
     });
     it('should drop elements the way described in drop documentation, with number param smaller than array len', function(){
        myExpect(drop([1, 2, 3], 2)).to.eql([3]);
     });
     it('should drop elements the way described in drop documentation, with number param larger than array len', function(){
        myExpect(drop([1, 2, 3], 5)).to.eql([]);
     });
     it('should drop elements the way described in drop documentation, with number param zero', function(){
        myExpect(drop([1, 2, 3], 0)).to.eql([1, 2, 3]);
     });
     it('should drop NaN elements', function(){
        myExpect(drop([1, NaN, 3], 2)).to.eql([3]);
     });
     it('should err with decimal number', function(){
         // should it?
        const dropWithDecimalParam = () => drop([1, 2, 3], 1.3);
        myExpect(dropWithDecimalParam).to.throw();
     });
});