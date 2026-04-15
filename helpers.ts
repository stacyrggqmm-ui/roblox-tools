function isValidInput(input: any): boolean {
    return typeof input === 'string' && input.trim() !== '';
}

function processInput(input: string): void {
    if (!isValidInput(input)) {
        throw new Error('Invalid input: input must be a non-empty string.');
    }
    console.log(`Processing input: ${input}`);
}

function main(inputs: string[]): void {
    inputs.forEach(input => {
        try {
            processInput(input);
        } catch (error) {
            console.error(error.message);
        }
    });
}

const inputs = ['hello', '', 'world', null, '  '];
main(inputs);