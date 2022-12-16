import expect from "chai";
import assert from "chai";

import map from '../application/map.js';


var myExpect = expect.expect;


describe('Map', function(){
    it('should iterate same type array correctly', function(){
        myExpect(map([4, 8], function(n){return n * n})).to.eql([16,64]);
     });
     it('should iterate null array correctly', function(){
        myExpect(map([], function(n){return n * n})).to.eql([]);
     });
     it('should throw error when iterator cant iterate correctly', function(){
        myExpect(map([1, 'b'], function(n){return n * n})).to.throw;
     });
     it('should  iterate mixed array correctly if it can iterate', function(){
        myExpect(map([1, 'b'], function(n){return n +1})).to.eql([2,'b1']);
     });
    // it('should  throw error when no arguments are passed', function(){
    //    const mapWithNoArguments = () => map();
    //    myExpect(mapWithNoArguments).to.throw();
    // });
    // it('should  throw error when no array passed', function(){
    //    const mapWithNoArray = () => map(NaN, function(n){return n +1});
     //   myExpect(mapWithNoArray).to.throw();
     //});
     it('should throw error when no iterator is provided', function(){
        const failedMapping = () => map([1, 'b']);
        myExpect(failedMapping).to.throw();
     });
});