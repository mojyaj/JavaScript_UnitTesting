import { vi, it, expect, describe, beforeAll, afterEach } from 'vitest'

import { HttpError, ValidationError } from './errors.js'

let httpError;
let validError;

beforeAll( () => {

    httpError = new HttpError('200', 'message', 'json data');
    validError = new ValidationError('validation message')
});
afterEach( () => {
    httpError = new HttpError('200', 'message', 'json data');
    validError = new ValidationError('validation message')
});


describe('Class HttpError', () => {

    /*  Three Properties:
            statusCode
            message
            data
    */

    it('should create an object of type HttpError using new keyword', () =>  {

        expect(httpError).toBeInstanceOf(HttpError);
    });

    it('should initialize with provided values', () => {

        const newStatusCode = '400';
        const newMessage = 'new message';
        const newData = 'new data';

        const resultHttpError = new HttpError(newStatusCode, newMessage, newData);

        expect(resultHttpError.statusCode).toBe(newStatusCode);
        expect(resultHttpError.message).toBe(newMessage);
        expect(resultHttpError.data).toBe(newData);
    });

    it('should get correct statusCode, message, and data', () =>  {

        expect(httpError.statusCode).toBe('200');
        expect(httpError.message).toBe('message');
        expect(httpError.data).toBe('json data');
    });

    it('should set new statusCode, message, and data', () =>  {

        const newStatusCode = '400';
        const newMessage = 'new message';
        const newData = 'new data';

        httpError.statusCode = newStatusCode;
        httpError.message = newMessage;
        httpError.data = newData;

        expect(httpError.statusCode).toBe(newStatusCode);
        expect(httpError.message).toBe(newMessage);
        expect(httpError.data).toBe(newData);
    });
});


describe('Class ValidationError', () =>  {

    /* One Property: message
*/

    it('should create an object of type ValidationError using new keyword', () =>  {

        expect(validError).toBeInstanceOf(ValidationError);
    });

    it('should initialize with provided values', () => {

        const newMessage = 'new message';

        const resultValidError = new ValidationError(newMessage);

        expect(resultValidError.message).toBe(newMessage);
    });

    it('should get correct message', () =>  {

        expect(validError.message).toBe('validation message');
    });

    it('should set new message', () =>  {

        const newMessage = 'new message';

        validError.message = newMessage;

        expect(validError.message).toBe(newMessage);
    });
});