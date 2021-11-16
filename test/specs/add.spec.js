const Calculator = require("../../app/calculator.js");
const { expect } = require("chai");

describe("Summarize all parameters", function () {
  let validator;
  beforeEach(function () {
    validator = new Calculator();
  });
  this.afterEach(function () {
    validator = null;
  });
  it("Should return positive value with all positive parameters", function () {
    expect(validator.add(2, 4, 10)).to.be.equal(16);
  });
  it("Should return positive value with one negative parameter", function () {
    expect(validator.add(-2, 4, 10)).to.be.equal(12);
  });
  it("Should return positive value with two positive parameters", function () {
    expect(validator.add(-2, -4, 10)).to.be.equal(4);
  });
  it("Should return negative value with all negative parameter", function () {
    expect(validator.add(-2, -10, -4)).to.be.equal(-16);
  });
  it("Should return negative value with one negative parameter", function () {
    expect(validator.add(2, -10, 4)).to.be.equal(-4);
  });
  it("Should return negative value with two negative parameters", function () {
    expect(validator.add(-2, -10, 4)).to.be.equal(-8);
  });
  it("Should return positive value with all positive and fractional parameters", function () {
    expect(validator.add(2.2, 4.4, 10.01)).to.be.equal(16.61);
  });
  it("Should return negative value with all negative and fractional parameters", function () {
    expect(validator.add(-2.2, -4.4, -10.01)).to.be.equal(-16.61);
  });
  it("Should return positive value with different parameters", function () {
    expect(validator.add(-2, 0, 10.08)).to.be.equal(8.08);
  });
  it("Should return negative value with different parameters", function () {
    expect(validator.add(0, 5, -10.08)).to.be.equal(-5.08);
  });
  it("Should return zero", function () {
    expect(validator.add(0, 0, 0)).to.be.equal(0);
  });
  it("Without one parameter", function () {
    expect(validator.add(0, 0)).to.be.eql(NaN);
  });
});