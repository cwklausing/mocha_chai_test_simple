var addOne = require('../src/app.js').addOne;
var expect = require('chai').expect;

//describe
describe("testing the addOne function", function(){
   it("should add one to the argument", function(){
       //where the test code goes
       expect(addOne(42)).to.equal(43);
       expect(addOne(100)).to.equal(101);
   })
});