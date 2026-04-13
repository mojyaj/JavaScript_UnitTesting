import { it, expect, describe } from 'vitest';

import { add, calculateResult } from './math';

describe('add()', () => {

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

        // Arrange
        const numbers = [];
        
        // Act
        const result =add(numbers);

        // Assert
        expect(result).toBe(0);
    });

    it('should throw an error if no value is passed into the function', () => {
        
        // Act
        const resultFn = () => {
            // Wrap test function call in a function to be able to assert that it throws an error
            add();
        };

        // Assert
        expect(resultFn).toThrow();
    });

    it('should throw an error if provided with multiple arguments instead of an array', () => {

        // Arrange
        const num1 = 1;
        const num2 = 2;

        // Act
        const resultFn = () => {
            add(1,2); // multiple arguments instead of an array
            // Trivia: TypeScript would have prevented this error at compile time by enforcing the correct type of the function's parameter
        };

        // Assert
        expect(resultFn).toThrow(/is not iterable/);
    });

});

describe('calculateResult()', () => {

    // 'calculateResult()' returns a numeric string.
    // Will work properly if argument is array containing two numeric strings
    // Trys to sanitize and add the numeric strings
    // Catches and returns an error message string

    it('should return a numeric string if argument is an array of 2 numeric strings', () => {

        // Arrange
        const nums = ['1', '3'];
        const expected = '4';

        // Act
        const result = calculateResult(nums)

        // Assert
        expect(result).toEqual(expected);
    });

    it('should return an error message, "Invalid number input.", if array contains non-numeric strings', () => {

        // Arrange
        const nums = ['2, f'];
        const errMsg = 'Invalid number input.'
        
        // Act
        const resultError = calculateResult(nums);

        // Assert
        expect(resultError).toBe(errMsg);
    });

    it('should return NaN')

});