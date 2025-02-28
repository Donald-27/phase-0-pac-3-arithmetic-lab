// Define basic math functions
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function increment(n) {
    return n + 1;
}

function decrement(n) {
    return n - 1;
}

function makeInt(n) {
    return parseInt(n, 10);  // Assumes base 10
}

function preserveDecimal(n) {
    return parseFloat(n);
}

// Export functions for testing (only if using Node.js)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        add,
        subtract,
        multiply,
        divide,
        increment,
        decrement,
        makeInt,
        preserveDecimal
    };
}
