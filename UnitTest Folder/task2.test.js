
const { default: expect } = require("expect");
//const { it } = require("node:test");
const { test } = require("picomatch");
const power=require('../Task2')
describe('testing power', () => {
   it('should exp 2 of 2 to equal 4',()=>{
    expect(power(2,2)).toBe(4)
   })
});

