import { it, expect } from 'vitest'

import { generateToken, generateTokenPromise } from './async-example.js'

// Testing a function that returns a Promise 
it('should generate a token value', (doneFn) =>  {

    // Arrange
    const testUserEmail = 'test@test.com';

    // Act & Assert
    generateToken(testUserEmail, (err, token) => {
        
        try {
            
            expect(token).toBeDefined();
            //expect(token).toBe(2); // this should fail
            doneFn();
        }
        catch (err){
            doneFn(err);
        }
    });
});

it('should generate a token value', () => {

    // Arrange
    const testUserEmail = 'test@test.com';

    // Act & Assert
    return expect(generateTokenPromise(testUserEmail)).resolves.toBeDefined();
});

it('should generate a token value ASYNC', async () => {

    // Arrange
    const testUserEmail = 'test@test.com';

    const token = await generateTokenPromise(testUserEmail);

    // Act & Assert
    expect(token).toBeDefined();
});

