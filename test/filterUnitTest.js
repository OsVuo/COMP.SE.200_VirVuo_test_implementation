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
        myExpect(filter(users, ({ active }) => active)).to.deep.eq(['Hawkeye', 'Radar']);
    });
});