"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function sum() {
    let a = 5, b = 10;
    return a + b;
}
console.log("Function sum:", sum());
const sumArrow = () => {
    let a = 7, b = 3;
    return a + b;
};
console.log("Arrow sum:", sumArrow());
const addDefault = (a = 1, b = 2) => a + b;
console.log("Default:", addDefault());
console.log("Default (5,7):", addDefault(5, 7));
const addOptional = (a, b) => {
    return b ? a + b : a;
};
console.log("Optional (5):", addOptional(5));
console.log("Optional (5,10):", addOptional(5, 10));
const addRest = (...numbers) => {
    return numbers.reduce((total, num) => total + num, 0);
};
console.log("Rest (1,2,3,4,5):", addRest(1, 2, 3, 4, 5));
//# sourceMappingURL=app.js.map