// countChar.ts

function countChar(str: string, char: string): number {
    return str.split("").filter(c => c === char).length;
}

// Test
console.log("Số lần xuất hiện:", countChar("hello world", "l"));  // Output: 3

