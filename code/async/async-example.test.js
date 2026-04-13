import { it, expect } from 'vitest'

import { generateToken } from './async-example.js'

it('should generate a token value', (doneFn) =>  {

    // Arrange
    const testUserEmail = 'test@test.com';

    // Act & Assert
    generateToken(testUserEmail, (err, token) => {
        
        //expect(token).toBeDefined();

        try {
            expect(token).toBe(2); 
            doneFn();
        }
        catch (err){
            doneFn(err);
        }
        
    });

});