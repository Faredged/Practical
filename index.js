/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function add(a, b) {
    return a + b;
}

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function subtract(a, b) {
    return a - b;
}

/**
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function multiply(a, b) {
    return a * b;
}

/**
 * @param {number} a
 * @param {number} b
 * @returns {number | null}
 */
function divide(a, b) {
    if (b === 0) {
        return null;
    }
    return a / b;
}

/** @type {number} */
const num1 = 10;
/** @type {number} */
const num2 = 5;

console.log(`Add: ${add(num1, num2)}`);
console.log(`Subtract: ${subtract(num1, num2)}`);
console.log(`Multiply: ${multiply(num1, num2)}`);
console.log(`Divide: ${divide(num1, num2)}`);
