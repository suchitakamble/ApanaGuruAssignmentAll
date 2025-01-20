function stringOperations() {
    let output = "";

    // Step 1: Declare a string
    const str1 = "Hello, World!";
    const str2 = 'JavaScript is amazing!';
    output += `String 1: "${str1}"\nString 2: '${str2}'\n\n`;

    // Step 2: Length property
    output += `Length of str1: ${str1.length}\n\n`;

    // Step 3: charAt() method
    const index = 7; // Example index
    if (index >= 0 && index < str1.length) {
        output += `Character at index ${index} in str1: ${str1.charAt(index)}\n\n`;
    } else {
        output += `Index ${index} is out of bounds for str1.\n\n`;
    }

    // Step 4: Concatenation
    const concatenated = str1.concat(" ", str2);
    output += `Concatenated string: "${concatenated}"\n\n`;

    // Step 5: includes() method
    const substring = "World";
    const includes = str1.includes(substring);
    output += `Does str1 include "${substring}"? ${includes}\n\n`;

    // Step 6: indexOf() method
    const searchChar = "o";
    const firstIndex = str1.indexOf(searchChar);
    output += `First occurrence of "${searchChar}" in str1: ${firstIndex}\n\n`;

    // Step 7: lastIndexOf() method
    const lastIndex = str1.lastIndexOf(searchChar);
    output += `Last occurrence of "${searchChar}" in str1: ${lastIndex}\n\n`;

    // Step 8: slice() method
    const sliced = str1.slice(7, 12);
    output += `Slice of str1 from index 7 to 12: "${sliced}"\n\n`;

    // Step 9: split() method
    const delimiter = ",";
    const splitArray = str1.split(delimiter);
    output += `Splitting str1 by "${delimiter}": ${splitArray}\n\n`;

    // Step 10: toLowerCase() and toUpperCase() methods
    const lower = str1.toLowerCase();
    const upper = str1.toUpperCase();
    output += `Lowercase str1: "${lower}"\nUppercase str1: "${upper}"\n\n`;

    // Step 11: trim() method
    const dirtyString = "   Trim me!   ";
    const trimmed = dirtyString.trim();
    output += `Original string: "${dirtyString}"\nTrimmed string: "${trimmed}"\n\n`;

    // Step 12: Comprehensive example
    const userInput = "  Example string manipulation  ";
    const cleanedInput = userInput.trim().toUpperCase();
    output += `Original input: "${userInput}"\nCleaned input: "${cleanedInput}"\n`;

    document.getElementById("output").innerText = output;
}
