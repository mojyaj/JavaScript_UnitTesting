import { describe, it, expect, vi } from 'vitest'

import { generateReportData } from './data.js'

describe('generateReportData()', () => {

    it('should execute logFn if provided', () => {

        const logger = vi.fn();
        generateReportData(logger);

        // Only pass if 'logger' was called inside of 'generateReportData()'
        expect(logger).toBeCalled(); // or .toHaveBeenCalled()
    });

});