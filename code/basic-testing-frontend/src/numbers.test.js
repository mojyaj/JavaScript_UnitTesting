import { describe, it, expect } from 'vitest';

import { transformToNumber, cleanNumbers } from './util/numbers';

describe('transformToNumber()', () => {

    it('should transform a valid numeric string to a number', () => {

        // Arrange
        const input = '4';
        const expResult = +input;

        // Act
        const result = transformToNumber(input);

        // Assert
        expect(result).toBeTypeOf('number');
        // expect(result).toBe(expResult);  // pass
        // expect(result).not.toBeNaN;      // pass
    });
    
    // Tip: 'NaN' is of type 'Number'

    it('should yield NaN if argument is not a valid numeric string', () => {
        
        // Arrange
        const input = '?';
        const expResult = NaN;

        // Act
        const result = transformToNumber(input);

        // Assert
        expect(result).toBeNaN();
    });

    it('should yield NaN if argument is undefined', () => {
        
        // Arrange
        let input = undefined;

        // Act
        const result = transformToNumber(input); // +(undefined) yields NaN

        // Assert
        expect(result).toBeNaN();
    });
});

describe('cleanNumbers()', () => {

    it('should return an array of number values if an array of string number values is provided', () => {

        // This test could also be called an integration test because we are calling 'cleanNumbers()'

        // Arrange
        const numberValues = ['1', '2'];

        // Act
        const cleanedNumbers =  cleanNumbers(numberValues);

        // Assert
        expect(cleanedNumbers[0]).toBeTypeOf('number');
    });

    it('should throw an error if an array with at least one empty string is provided', () => {
        const numberValues = ['', 1];

        const cleanFn = () => cleanNumbers(numberValues);

        expect(cleanFn).toThrow();
    })

});

