const Calculator = require('../../app/calculator.js');
const { expect } = require('chai');

describe('Summarize all parameters', function () {
  let calculator;
  beforeEach(function () {
    calculator = new Calculator();
  });
  this.afterEach(function () {
    calculator = null;
  });
  it('Should return positive value with all positive parameters', function () {
    expect(calculator.add(2, 4, 10)).to.be.equal(16);
  });
  it('Should return positive value with one negative parameter', function () {
    expect(calculator.add(-2, 4, 10)).to.be.equal(12);
  });
  it('Should return positive value with two negative parameters', function () {
    expect(calculator.add(-2, -4, 10, 10)).to.be.equal(14);
  });
  it('Should return negative value with all negative parameter', function () {
    expect(calculator.add(-2, -10, -4)).to.be.equal(-16);
  });
  it('Should return negative value with one negative parameter', function () {
    expect(calculator.add(2, -10, 4)).to.be.equal(-4);
  });
  it('Should return negative value with two negative parameters', function () {
    expect(calculator.add(-2, -10, 4)).to.be.equal(-8);
  });
  it('Should return positive value with all positive and fractional parameters', function () {
    expect(calculator.add(2.2, 4.4, 10.01)).to.be.equal(16.61);
  });
  it('Should return negative value with all negative and fractional parameters', function () {
    expect(calculator.add(-2.2, -4.4, -10.01)).to.be.equal(-16.61);
  });
  it('Should return positive value with different parameters', function () {
    expect(calculator.add(-2, 0, 10.08)).to.be.equal(8.08);
  });
  it('Should return negative value with different parameters', function () {
    expect(calculator.add(0, 5, -10.08)).to.be.equal(-5.08);
  });
  it('Should return zero', function () {
    expect(calculator.add(0, 0, 0)).to.be.equal(0);
  });
  it('Without one parameter', function () {
    expect(calculator.add(0, 0)).to.be.eql(0);
  });
  it('Not a number, but a String value', function () {
    let addWithNotNumber = () => calculator.add(0, 0, 'GGGG');
    expect(addWithNotNumber).to.throw(Error, 'Variable in an array is not a number');
  });
  it('Not a number, but a Boolean value', function () {
    let addWithNotNumber = () => calculator.add(00, 0, false);
    expect(addWithNotNumber).to.throw(Error, 'Variable in an array is not a number');
  });
  it('Not a number, but an undefined value', function () {
    let addWithNotNumber = () => calculator.add(0, 0, undefined);
    expect(addWithNotNumber).to.throw(Error, 'Variable in an array is not a number');
  });
});