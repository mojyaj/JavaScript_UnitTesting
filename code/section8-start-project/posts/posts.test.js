import { describe, it, expect, beforeEach } from 'vitest'

import { sendPostData, extractPostData } from './posts.js'

let testTitle;
let testContent;
let testFormData;

beforeEach( () => {

    testTitle = 'Test title';
    testContent = 'Test content';
    testFormData = {
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