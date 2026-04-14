import { it, expect } from 'vitest'

import  writeData from './io.js'

// 'data.txt' file must exist before running tests

it('should execute the writeData method', () => {

    const testData = 'Test';
    const testFilename = 'test.txt';
    return expect(writeData(testData, testFilename)).resolves.toBeUndefined();

    // IMPORTANT TO KNOW
	// 	.writeFile() (Promise version) behavior
	// 		1) Resolves when the file is successfully written
	// 		2) Rejects if there is an error
	// 		3) *** Resolves with undefined ***
});

