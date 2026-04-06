import { it, expect } from 'vitest';

import { add } from './math';

it('should summarize all number values in an array', () => {

    // Arrange and Act
    const result = add([1,2,3]);

    // Assert
    expect(result).toBe(6);
});
