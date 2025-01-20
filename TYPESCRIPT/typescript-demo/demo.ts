// Function to repeat a string a specified number of times
function repeatString(input: string, times: number): string {
    return input.repeat(times); // Modern ES6+ feature
}

// Example usage
const result = repeatString("Hello ", 3);
console.log(result); // Output: Hello Hello Hello 
