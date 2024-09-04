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
    if (b === 0) {
        return null;
    }
    return a / b;
}
















































































































































































const num1 = 10;
const num2 = 5;
console.log(`Add: ${add(num1, num2)}`);
console.log(`Subtract: ${subtract(num1, num2)}`);
console.log(`Multiply: ${multiply(num1, num2)}`);
console.log(`Divide: ${divide(num1, num2)}`);
