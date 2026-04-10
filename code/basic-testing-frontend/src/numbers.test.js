import { it, expect } from 'vitest';

import { transformToNumber } from './util/numbers';

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
