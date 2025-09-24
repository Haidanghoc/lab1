// sum.ts

function sumNumbers(...numbers: number[]): number {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}

// Test
console.log("Tổng:", sumNumbers(1, 2, 3, 4, 5));  // Output: 15

