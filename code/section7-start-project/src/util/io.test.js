import { it, expect,vi } from 'vitest'
import { promises as fs } from 'fs';

import  writeData from './io.js'

// 'data.txt' file must exist before running tests

vi.mock('fs');

it('should execute the writeData method', () => {

    const testData = 'Test';
    const testFilename = 'test.txt';

    // Execute the mocked functions
    writeData(testData, testFilename);

    // Assert that the mocked 'writeFile()' was called inside of mocked 'writeData()'
    expect(fs.writeFile).toBeCalled();

    // Assertion using Spies
    //return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
    
    // IMPORTANT TO KNOW
	// 	.writeFile() (Promise version) behavior
	// 		1) Resolves when the file is successfully written
	// 		2) Rejects if there is an error
	// 		3) *** Resolves with undefined ***
});

