import expect from "chai";
import assert from "chai";

import chunk from '../application/chunk.js';


var myExpect = expect.expect;


describe('Chunk', function(){
    //it('should seperate array as described in chunk documents', function(){
     //   myExpect(chunk(['a','b','c','d'],2)).to.eql([['a','b'],['c', 'd']]);
    // });
     //it('should seperate array as described in chunk documents', function(){
     //   myExpect(chunk(['a','b','c','d'],3)).to.eql([['a','b', 'c'],['d']]);
    // });
     it('should seperate array to correct amount of chunks', function(){
        myExpect(chunk(['a','b','c','d','c','d'],2)).to.have.length(3);
     });
     it('should seperate array to correct size chunks', function(){
        myExpect(chunk(['a','b','c','d','c','d'],2)[0]).to.have.length(2);
     });
     //it('should handle empty array', function(){
     //   myExpect(chunk([],2)[0]).to.eql([]);
    // });
});
