
export interface Product {
    id: number;
    name: string;
    price: number;
    category: string;
}

export let products: Product[] = [
    { id: 1, name: "Laptop", price: 20000, category: "Điện tử" },
    { id: 2, name: "Điện thoại", price: 15000, category: "Điện tử" },
    { id: 3, name: "Táo", price: 50, category: "Thực phẩm" },
    { id: 4, name: "Gạo", price: 500, category: "Thực phẩm" },
    { id: 5, name: "Áo thun", price: 300, category: "Thời trang" },
];

export function filterByCategory(products: Product[], category: string): Product[] {
    return products.filter(p => p.category === category);
}

export function calculateTotalPrice(products: Product[]): number {
    return products.reduce((total, p) => total + p.price, 0);
}

export function findMinMax(products: Product[]): { min: Product, max: Product } {
    let min = products[0];
    let max = products[0];
    for (let p of products) {
        if (p.price < min.price) min = p;
        if (p.price > max.price) max = p;
    }
    return { min, max };
}


console.log("Sản phẩm Điện tử:", filterByCategory(products, "Điện tử"));
console.log("Tổng giá trị sản phẩm:", calculateTotalPrice(products));
console.log("Sản phẩm nhỏ nhất và lớn nhất:", findMinMax(products));
