interface UserInput { name: string; age: number; }

function isValidUserInput(input: UserInput): boolean {
    const namePattern = /^[A-Za-z]+$/;
    return namePattern.test(input.name) && input.age > 0;
}

function processInput(input: UserInput) {
    if (!isValidUserInput(input)) {
        throw new Error('Invalid input');
    }
    // Processing input
    console.log(`Name: ${input.name}, Age: ${input.age}`);
}

const userInputs: UserInput[] = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: -5 },
];

userInputs.forEach(input => {
    try {
        processInput(input);
    } catch (error) {
        console.error(error.message);
    }
});