"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function calculateRectangle(width, height) {
    const perimeter = 2 * (width + height);
    const area = width * height;
    return {
        perimeter,
        area
    };
}
const result = calculateRectangle(5, 10);
console.log(`Chu vi: ${result.perimeter}, Diện tích: ${result.area}`);
//# sourceMappingURL=rectangle.js.map