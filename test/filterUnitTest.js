/**
 * Simple unit test where function filter. An Array is entered and a filter is entered to 
 *  filter the first array on with the filter
 * 
 */

import expect from "chai";

import filter from '../application/filter.js';

var myExpect = expect.expect;

describe('filter', function(){
    
    it('should filter Arrays correctly', function(){
        const users = [{ 'user': 'Hawkeye', 'active': true },{ 'user': 'Frank', 'active': false },
        { 'user': 'Radar', 'active': true }]
        myExpect(filter(users, ({ active }) => active)).to.deep.eq([{ 'user': 'Hawkeye', 'active': true },{ 'user': 'Radar', 'active': true }]);
    });
    it('should return an array with an empty array with a non matching filter', function(){
        const users = [{ 'user': 'Scooby', 'Scaredy-Cat': true },{ 'user': 'Shaggy', 'Hungry': true },
        { 'user': 'Velma', '20-20': false }, { 'user': 'Fred', 'ascot': true }]
        myExpect(filter(users, ({ active }) => active)).to.deep.eq([[]]);
    });
    it('should return the original array if the filter filters everything', function(){
        const users = [{ 'user': 'Leonardo', 'Pizza': true },{ 'user': 'Raphael', 'Pizza': true },
        { 'user': 'Donatello', 'Pizza': true }, { 'user': 'Michelangelo', 'Pizza': true }]
        myExpect(filter(users, ({ Pizza }) => Pizza)).to.deep.eq(users);
    });
    it('should throw an error when given two illegal arguments', function(){
        const illegalArgumentsAdd = () => filter('a', 'b');
        myExpect(illegalArgumentsAdd).to.throw();
    });
    it('should throw an error when given no arguments', function(){
        const noArgumentsAdd = () => filter();
        myExpect(noArgumentsAdd).to.throw();
    }); 
});
