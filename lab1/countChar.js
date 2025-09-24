// countChar.ts
function countChar(str, char) {
    return str.split("").filter(function (c) { return c === char; }).length;
}
// Test
console.log("Số lần xuất hiện:", countChar("hello world", "l")); // Output: 3
