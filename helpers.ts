export function validateInput(input: any): boolean {
    if (typeof input !== 'string') return false;
    if (input.trim().length === 0) return false;
    return true;
}

export function processInput(input: any): string {
    if (!validateInput(input)) {
        throw new Error('Invalid input');
    }
    return input.trim().toLowerCase();
}

export function mainProcessingLoop(inputs: any[]): void {
    inputs.forEach(input => {
        try {
            const processedInput = processInput(input);
            console.log('Processed Input:', processedInput);
        } catch (error) {
            console.error(error.message);
        }
    });
}