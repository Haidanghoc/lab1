// sum.ts
function sumNumbers() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (acc, curr) { return acc + curr; }, 0);
}
// Test
console.log("Tổng:", sumNumbers(1, 2, 3, 4, 5)); // Output: 15
