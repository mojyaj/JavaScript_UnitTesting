import { it, expect,vi } from 'vitest'
import { promises as fs } from 'fs';

import  writeData from './io.js'

// 'data.txt' file must exist before running tests

vi.mock('fs');
vi.mock('path', () => { 
    return {
        default: {
            join: (...args) => {
                // return the last element in the array, 'filename'
                return args[args.length -1]
            }
        }
    };
});

// lecture 67. Custom Mocking Logic
it(`should show that writeData() passes the correct arguments to fs.writeFile, 
    using the result from path.join().`, () => {

    const testData = 'Test';
    const testFilename = 'test.txt';

    // Execute the mocked functions
    writeData(testData, testFilename); // this method calls two third-party functions

    // Assert arguments were passed into 'writeFile()'
    expect(fs.writeFile).toBeCalledWith(testFilename, testData);

    // IMPORTANT TO KNOW
	// 	.writeFile() (Promise version) behavior
	// 		1) Resolves when the file is successfully written
	// 		2) Rejects if there is an error
	// 		3) *** Resolves with undefined ***
});

// Try to ignore the test case name here
it('should execute the writeData method', () => {

    const testData = 'Test';
    const testFilename = 'test.txt';

    // Execute the mocked functions
    writeData(testData, testFilename);

    // Assert that the mocked 'writeFile()' was called inside of mocked 'writeData()'
    expect(fs.writeFile).toBeCalled();

    // Assert that the mocked 'writeFile()' was called inside of mocked 'writeData()'
    //expect(fs.writeFile).toBeCalled();

    // Assertion using Spies (ORIGINAL)
    //return expect(writeData(testData, testFilename)).resolves.toBeUndefined();
    
    // IMPORTANT TO KNOW
	// 	.writeFile() (Promise version) behavior
	// 		1) Resolves when the file is successfully written
	// 		2) Rejects if there is an error
	// 		3) *** Resolves with undefined ***
});

