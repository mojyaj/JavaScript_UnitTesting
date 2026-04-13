import { it, expect } from 'vitest'

import { generateToken } from './async-example.js'

it('should generate a token value', () =>  {

    // Arrange
    const testUserEmail = 'test@test.com';

    // Act & Assert
    generateToken(testUserEmail, (err, token) => {
        
        //expect(token).toBeDefined();
        
        // This should FAIL, but Vitest tells us that it PASSED!
        expect(token).toBe(2); // 2 is incorrect value

    });

});