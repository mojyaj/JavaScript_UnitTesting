import { describe, it, expect } from 'vitest';

import { validateStringNotEmpty, validateNumber } from './util/validation.js'


describe('validateStringNotEmpty()', () => {

    it('should throw an error message "Invalid input - must not be empty.", if argument is empty string', () => {
        
        // Arrange
        const empStr = "";
        const errMsg = 'Invalid input - must not be empty.';

        // Act
        const resultFn = () => validateStringNotEmpty(empStr);
        
        // Assert
        expect(resultFn).toThrowError(errMsg);
    
        // Tips:
        //      Wrap the function inside expect()
        //      const Vitest handle the error with .toThrowError()
    });

    it('should not throw if argument is a string literal', () => {

        // Arrange
        const str = "apple";

        // Act
        const  resultFn = () => validateStringNotEmpty(str);

        // Assert
        expect(resultFn).not.toThrow();
    });

    it('should throw an error if argument is an object', () => {
        
        // Arrange
        const obj = {};

        // Act
        const resultFn =  () => validateStringNotEmpty(obj);
        
        // Assert
        expect(resultFn).toThrow();
    });


 });



//------------------------------------
// validateNumber() tests

describe('validateNumber()', () => {  
    it('should throw if input is a string literal', () => {

        // Arrange
        const input = '1';

        // Act 
        const resultFn = () => validateNumber(input);

        // Assert
        expect(resultFn).toThrow();
    });

    it('should not throw if input is a number', () => {

        // Arrange
        const input = 3;

        // Act 
        const resultFn = () => validateNumber(input); 
        
        // Assert
        expect(resultFn).not.toThrow();
    });

    it('should throw error message, "Invalid number input", if input is NaN', () => {

        // Arrange
        const input = NaN;
        const errMsg = 'Invalid number input';
        
        // Act 
        const resultFn = () => validateNumber(input); 

        // Assert
        expect(resultFn).toThrowError(errMsg);
    });

    it('should throw if input is undefined', () => {

        // Arrange
        const input = undefined;

        // Act
        const validationFn = () => validateNumber(input);

        //Assert
        expect(validationFn).toThrow();
    });

    it('should throw an error if a non-numeric value is provided', () => {

        // Arrange
        const input = '1';

        // Act
        const validationFn = () => validateNumber(input);

        // Assert
        expect(validationFn).toThrow()
    });

});

