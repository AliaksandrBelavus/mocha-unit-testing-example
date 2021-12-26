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
   * @param {*} args array of numbers
   * @param {*} elementType the value of checking the array for a number
   * @param {*} element each element of the array
   * @return {*} add all numbers
   * @memberof Calculator
   */
  add(...args) {
    let elementType = args.every((element) => typeof element === 'number');
    if (elementType === true) {
      return args.reduce((acc, curr) => acc + curr);
    } else {
      return new Error('Variable in an array is not a number');
    }
  }

  /**
   *
   *
   * @param {*} args array of numbers
   * @param {*} elementType the value of checking the array for a number
   * @param {*} element each element of the array
   * @return {Number} multiply all parameters
   * @memberof Calculator
   */
  multiply(...args) {
    let elementType = args.every((element) => typeof element === 'number');
    if (elementType === true) {
      return args.reduce((acc, curr) => acc * curr);
    } else {
      throw Error('Variable in an array is not a number');
    }
  }
}

module.exports = Calculator;
