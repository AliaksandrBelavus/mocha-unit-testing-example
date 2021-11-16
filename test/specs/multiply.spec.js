const Calculator = require("../../app/calculator.js");
const { expect } = require("chai");

describe("Multiply all parameters", function () {
  let validator;
  beforeEach(function () {
    validator = new Calculator();
  });
  this.afterEach(function () {
    validator = null;
  });
  it("Should return positive value with all positive parameters", function () {
    expect(validator.multiply(7, 14, 9)).to.be.equal(882);
  });
  it("Should return negative value with one negative parameter", function () {
    expect(validator.multiply(-7, 14, 5)).to.be.equal(-490);
  });
  it("Should return positive value with two negative parameters", function () {
    expect(validator.multiply(-7, -14, 5)).to.be.equal(490);
  });
  it("Should return negative value with all negative parameter", function () {
    expect(validator.multiply(-6, -12, -12)).to.be.equal(-864);
  });
  it("Should return positive value with all positive and fractional parameters", function () {
    expect(validator.multiply(5.2, 4.8, 12.12)).to.be.equal(302.5152);
  });
  it("Should return negative value with one negative and fractional parameters", function () {
    expect(validator.multiply(5, -4.8, 12)).to.be.equal(-288);
  });
  it("Should return positive value with two negative and fractional parameters", function () {
    expect(validator.multiply(-2.5, -4.2, 11)).to.be.equal(115.5);
  });
  it("Should return zero", function () {
    expect(validator.multiply(0, 0, 0)).to.be.equal(0);
  });
  it("Without one parameter", function () {
    expect(validator.multiply(0, 0)).to.be.eql(NaN);
  });
});