/**
 * Simple unit test where function ceil is tested.
 * 
 * divide should round up numbers correctly to a desired precisision
 * it should not round them up wrong
 */

import expect from "chai";

import ceil from '../application/ceil.js';

var myExpect = expect.expect;

describe('Ceil', function(){
    
    it('should round up correctly to a whole number when no desired precision is entered', function(){
        myExpect(ceil(4.006)).to.equal(5);
    });

    it('should round up to a desired precision correctly', function(){
        myExpect(ceil(6.0009, 2)).equal(6.01);
    });
    it('entering a negative precision point should work correctly', function(){
        myExpect(ceil(6040, -2)).equal(6100);
    });
    it('should throw an error when given two illegal arguments', function(){
        const illiegalArgumentsAdd = () => add('a', 'b');
        myExpect(illiegalArgumentsAdd).to.throw();
    });
    it('should throw an error when given no arguments', function(){
        const noArgumentsAdd = () => add();
        myExpect(noArgumentsAdd).to.throw();
    });   
});
