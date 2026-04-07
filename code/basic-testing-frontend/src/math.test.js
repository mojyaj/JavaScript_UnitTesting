import { it, expect } from 'vitest';

import { add } from './math';

it('should summarize all number values in an array', () => {

    // Arrange
    const numbers = [1, 2, 3];

    // Act
    const result = add(numbers);

    // Assert
    const expectedResult = numbers.reduce(
        (prevValue, curValue) => prevValue + curValue, 
        0
    );
    expect(result).toBe(expectedResult);
});

it('should yield NaN if at least one invalid number is provided', () => {
   
    // Arrange
    const inputs = ['invalid', 1];  // a valid that can't be converted to a number

    // Act
    const result = add(inputs);

    // Assert
    expect(result).toBeNaN();

});

it('should yield a correct sum if an array of numeric string values is provided', () => {
    // Arrange
    const numbers = ['1', '2'];  // valid numeric strings

    // Act
    const result = add(numbers);

    // Assert
    const expectedResult = numbers.reduce(
            (prevValue, curValue) => +prevValue + +curValue, // prefix variables with "+" 'Unary Plus' to convert operands to numbers before summing
            0
        );
    expect(result).toBe(expectedResult);

    /** 
     * Failed test result:
     *  - Expected   "3"
     *  + Received   "012"
     * 
    */
})

it('should yield 0 if an empty array is provided', () => {

    const numbers = [];

    const result =add(numbers);

    expect(result).toBe(0);
});

it('should throw an error if no value is passed into the function', () => {
    const result = add();

});