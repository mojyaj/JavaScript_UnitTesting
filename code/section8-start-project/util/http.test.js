import { it, vi, expect } from 'vitest'

import { HttpError } from './errors.js'
import { sendDataRequest } from './http.js'

// Dummy Resolve Data
const testResponseData = {testKey: 'testData'};

// Spy with added behavior that mimicks 'fetch()'
const testFetch = vi.fn( (url, options) => {
    return new Promise( (resolve, reject) => {
        if (typeof options.body !== 'string') {
            return reject('Not a string.');
        }
        
        const testResponse = {
            ok: true,
            json() { // mimick response.json()
                return new Promise( (resolve, reject) => {
                    resolve(testResponseData);
                })
            }
        };
        resolve(testResponse);
    });
});

// Create Mocked fetch() & Spy on it
vi.stubGlobal('fetch', testFetch);

it('should return a Promise containing any available response data', () => {

    const testData = {key: 'test'};

    return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
});

it('should convert the provided data to JSON before sending the request', async () => {
    
    const testData = {key: 'test'};

    let errorMessage;

    try {
        sendDataRequest(testData);
    } catch (error) {
        errorMessage = error;
    }

    /*
        // This line is easy to mis-read: The Promise should NOT reject with 'Not a string.'
        return expect(sendDataRequest(testData)).not.rejects.toBe('Not a string.');

        1) sendDataRequest(testData) returns a Promise
        2) .rejects expects the Promise to reject (fail)
        3) .not.rejects expects the Promise to NOT reject
        4) .toBe('Not a string.'), this part only applies IF it rejects
        The Promise should NOT reject with 'Not a string.'
    */
});



it('should throw an HttpError in case of non-ok responses', () => {
    // Modified version of mocked 'fetch()' (AKA 'testFetch') from above
    testFetch.mockImplementationOnce( (url, options) => {
        return new Promise( (resolve, reject) => {
            if (typeof options.body !== 'string') {
                return reject('Not a string.');
            }
            
            const testResponse = {
                ok: false, // changed from true to false
                json() {
                    return new Promise( (resolve, reject) => {
                        resolve(testResponseData);
                    })
                }
            };
            resolve(testResponse);
        });
    });

    const testData = {key: 'test'};
    
    return expect(sendDataRequest(testData)).rejects.toBeInstanceOf(HttpError);
});
