import fs from 'fs';
import path from 'path';

import { it, vi } from 'vitest';
import { Window } from 'happy-dom'

import { showError } from './dom.js'

// MUST USE HAPPY-DOM: "vitest --run --environment happy-dom"

// Create URL string for 'index.html'
const htmlDocPath = path.join(process.cwd(), 'index.html');
// Halt code execution until file is read
const htmlDocumentContent = fs.readFileSync(htmlDocPath).toString();

// Load 'index.html' into the DOM
const window = new Window();            // Happy-DOM
const document = window.document;       // the virtual DOM
document.write(htmlDocumentContent);    // Load file into virtual DOM

// Stub/Replace the REAL 'document' with our VIRTUAL 'document'
vi.stubGlobal('document', document);

it('first test', () => {

    showError('test');
});



