import { it, vi, expect } from 'vitest'

import { sendDataRequest } from './http.js'

// Dummy Resolve Data
const testResponseData = {testKey: 'testData'};

// Spy with added behavior that mimicks 'fetch()'
const testFetch = vi.fn( (url, options) => {
    
    return new Promise( (resolve, reject) => {
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