import { describe, it, expect, beforeEach } from 'vitest'

import { sendPostData, extractPostData } from './posts.js'

beforeEach( () => {

    const testTitle = 'Test title';
    const testContent = 'Test content';
    const testFormData = {
        title: testTitle,
        content: testContent,
        get(identifier) {
            return this[identifier];
        }
    }
});

describe('extractPostData()', () => {

    it('should extract title and content from the provided form data', () => {
        
        // Arrange
        
        // Act
        const data = extractPostData(testFormData);

        // Assert
        expect(data.title).toBe(testTitle);
        expect(data.content).toBe(testContent);
    });
    
});