import { vi } from 'vitest';

export const promises = {
    
    // Replace 'writeFile' method (originally a third-party)
    writeFile: vi.fn( (path, data) => {
        return new Promise( (resolve, reject) => {
            // We could add more logic if needed
            resolve(); // resolve to nothing like original method (undefined)
        });
    })
}
