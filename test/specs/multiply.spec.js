const Calculator = require("../../app/calculator.js");
const { expect } = require("chai");

describe("Multiply all parameters", function () {
  let calculator;
  beforeEach(function () {
    calculator = new Calculator();
  });
  this.afterEach(function () {
    calculator = null;
  });
  it("Should return positive value with all positive parameters", function () {
    expect(calculator.multiply(7, 14, 9)).to.be.equal(882);
  });
  it("Should return negative value with one negative parameter", function () {
    expect(calculator.multiply(-7, 14, 5)).to.be.equal(-490);
  });
  it("Should return positive value with two negative parameters", function () {
    expect(calculator.multiply(-7, -14, 5, 2)).to.be.equal(980);
  });
  it("Should return negative value with all negative parameter", function () {
    expect(calculator.multiply(-6, -12, -12)).to.be.equal(-864);
  });
  it("Should return positive value with all positive and fractional parameters", function () {
    expect(calculator.multiply(5.2, 4.8, 12.12)).to.be.equal(302.5152);
  });
  it("Should return negative value with one negative and fractional parameters", function () {
    expect(calculator.multiply(5, -4.8, 12)).to.be.equal(-288);
  });
  it("Should return positive value with two negative and fractional parameters", function () {
    expect(calculator.multiply(-2.5, -4.2, 11)).to.be.equal(115.5);
  });
  it("Should return zero", function () {
    expect(calculator.multiply(0, 0, 0)).to.be.equal(0);
  });
  it("Without one parameter", function () {
    expect(calculator.multiply(0, 0)).to.be.eql(0);
  });
  it("Not a number, but a String value", function () {
    expect(calculator.add(0, 0, "GGGG")).to.be.eql('0GGGG');
  });
  it("Not a number, but a Boolean value", function () {
    expect(calculator.add(0, 0, false)).to.be.eql(0);
  });
  it("Not a number, but an undefined value", function () {
    expect(calculator.add(0, 0, undefined)).to.be.eql(NaN);
  });
});