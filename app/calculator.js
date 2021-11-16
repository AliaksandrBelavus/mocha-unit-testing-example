/* eslint-disable linebreak-style */
/**
 *
 *A simple class containing two methods
 * @class Calculator
 */
class Calculator {
  /**
   * Creates an instance of Calculator.
   * @memberof Calculator
   */
  constructor() {}

  /**
   *
   *
   * @param {Number} a first parameter
   * @param {Number} b second parameter
   * @param {Number} c third parameter
   * @return {Number} summarize all parameters
   * @memberof Calculator
   */
  add(a, b, c) {
    return a + b + c;
  }

  /**
   *
   *
   * @param {Number} a first parameter
   * @param {Number} b second parameter
   * @param {Number} c third parameter
   * @return {Number} multiply all parameters
   * @memberof Calculator
   */
  multiply(a, b, c) {
    return a * b * c;
  }
}

module.exports = Calculator;
