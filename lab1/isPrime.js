// isPrime.ts
function isPrime(n) {
    if (n < 2)
        return false;
    for (var i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0)
            return false;
    }
    return true;
}
// Test
console.log("7 có phải số nguyên tố?", isPrime(7)); // true
console.log("10 có phải số nguyên tố?", isPrime(10)); // false
