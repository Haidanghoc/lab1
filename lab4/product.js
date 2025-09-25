"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.products = void 0;
exports.filterByCategory = filterByCategory;
exports.calculateTotalPrice = calculateTotalPrice;
exports.findMinMax = findMinMax;
exports.products = [
    { id: 1, name: "Laptop", price: 20000, category: "Điện tử" },
    { id: 2, name: "Điện thoại", price: 15000, category: "Điện tử" },
    { id: 3, name: "Táo", price: 50, category: "Thực phẩm" },
    { id: 4, name: "Gạo", price: 500, category: "Thực phẩm" },
    { id: 5, name: "Áo thun", price: 300, category: "Thời trang" },
];
function filterByCategory(products, category) {
    return products.filter(function (p) { return p.category === category; });
}
function calculateTotalPrice(products) {
    return products.reduce(function (total, p) { return total + p.price; }, 0);
}
function findMinMax(products) {
    var min = products[0];
    var max = products[0];
    for (var _i = 0, products_1 = products; _i < products_1.length; _i++) {
        var p = products_1[_i];
        if (p.price < min.price)
            min = p;
        if (p.price > max.price)
            max = p;
    }
    return { min: min, max: max };
}

console.log("Sản phẩm Điện tử:", filterByCategory(exports.products, "Điện tử"));
console.log("Tổng giá trị sản phẩm:", calculateTotalPrice(exports.products));
console.log("Sản phẩm nhỏ nhất và lớn nhất:", findMinMax(exports.products));
