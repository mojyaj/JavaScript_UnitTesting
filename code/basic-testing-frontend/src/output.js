export function generateResultText(calculationResult) {
    let resultText = '';

    if (calculationResult === 'invalid') {
        resultText = 'Invalid input. You must enter valid numbers.';
    } else if (calculationResult !== 'no-calc') { // This condition should have been === instead of !===
                                                 // and returned ''. The code block should have been moved outside
        resultText = 'Result: ' + calculationResult;
    }

    // if calculationResult is === 'no-calc'
    // This line will NEVER be reached because 'no-calc' is never assigned
    // anywhere within the source code
    return resultText;
}

export function outputResult(resultText) {
    const output = document.getElementById('result');
    output.textContent = resultText;
}