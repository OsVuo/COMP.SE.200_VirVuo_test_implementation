import expect from "chai";

import isObjectLike from '../application/isObjectLike.js';
import map from '../application/map.js';

var myExpect = expect.expect;

var audiA3 = {type:"Audi", model:"A3", milage:512};
var audiA4 = {type:"Audi", model:"A4", milage:5123};
var audiA6 = {type:"Audi", model:"A6", milage:51};

var testaudiA3 = {type:"Audi", model:"A3", milage:1512};
var testaudiA4 = {type:"Audi", model:"A4", milage:6123};
var testaudiA6 = {type:"Audi", model:"A6", milage:1051};
const testmyCars =[testaudiA3, testaudiA4, testaudiA6];

describe('isObjectLikeMap', function(){
    
    it('should correclty pass when array to be mapped is full of objectlike objects', function(){
        const myCars =[audiA3, audiA4, audiA6];

        myExpect(map(myCars, function(n){
            if(!isObjectLike(n)){
                throw 'argument to be mapped is not object like';
            }
            n.milage = n.milage + 1000;
        }
        )).to.not.eq(testmyCars);
        
    });


    it('should correctly throw when array to be mapped contains !isObjectLike entity', function(){
        const myCars =[audiA3, audiA4, audiA6, "audiA10"];

        const illiegalArgumentsAdd = () => map(myCars, function(n){
            if(!isObjectLike(n)){
                throw new Error('Mapped array contains !objectLike entity: '+n);
            }
        });

        myExpect(illiegalArgumentsAdd).to.throw();
    });


});