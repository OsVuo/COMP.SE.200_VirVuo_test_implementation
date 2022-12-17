import expect from "chai";
import assert from "chai";

import chunk from '../application/chunk.js';


var myExpect = expect.expect;


describe('Chunk', function(){
    it('should seperate array as described in chunk documents', function(){
        myExpect(chunk(['a','b','c','d'],2)).to.eql([['a','b'],['c', 'd']]);
     });
     it('should seperate array as described in chunk documents', function(){
        myExpect(chunk(['a','b','c','d'],3)).to.eql([['a','b', 'c'],['d']]);
     });
     it('should seperate array to correct amount of chunks', function(){
        myExpect(chunk(['a','b','c','d','c','d'],2)).to.have.length(3);
     });
     it('should seperate array to correct size chunks', function(){
        myExpect(chunk(['a','b','c','d','c','d'],2)[0]).to.have.length(2);
     });
     it('should handle empty array', function(){
        myExpect(chunk([],2)[0]).to.eql([]);
     });
     it('should throw an error when given no arguments', function(){
      const noArgumentsAdd = () => chunk();
      myExpect(noArgumentsAdd).to.throw();
     });
      it('should chunk by 1 if no size param is given', function(){
         myExpect(chunk(['a','b','c','d','c','d'])).to.have.length(6);
      });
      it('should chunk when array objects are objectLike', function(){
         var audiA3 = {type:"Audi", model:"A3", milage:1512};
         var audiA4 = {type:"Audi", model:"A4", milage:6123};
         var audiA6 = {type:"Audi", model:NaN, milage:1051};
         const myCars =[audiA3, audiA4, audiA6];
         myExpect(chunk(myCars)).to.have.length(3);
      });
      it('should chunk when array objects NaN', function(){
         const myCars =[NaN,NaN,NaN];
         myExpect(chunk(myCars)).to.have.length(3);
      });
});
