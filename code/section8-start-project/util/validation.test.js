import { vi, it, expect, describe } from 'vitest'

import { validateNotEmpty } from './validation.js'

describe('validatinoNotEmpty()', () => {
    
    it('should not throw if arguments are valid', () => {

        const text = 'Hello';
        const errorMsg = 'error message';

        const errorFn = () => { validateNotEmpty(text, errorMsg) };

        expect(errorFn).not.toThrow();
    });

    /** it(`should throw if argument 'errorMessage' is undefined`)
     *  This is testing 'ValidationError' class. It doesn't belong here.
     */


    it(`should throw if argument 'text' is empty string`, () => {

        const text = '';

        const errorFn = () => { validateNotEmpty(text, 'error message') };

        expect(errorFn).toThrow();
    });

    it('should throw with specified error message', () => {

        const text = '';
        const errorMsg = 'error message'

        const errorFn = () => { validateNotEmpty(text, errorMsg) };

        expect(errorFn).toThrow(errorMsg);
    });
    
});