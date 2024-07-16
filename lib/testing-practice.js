"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.calculator = void 0;
exports.capitalize = capitalize;
exports.reverseString = reverseString;
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function reverseString(string) {
  return string.split("").reverse().join("");
}
const calculator = exports.calculator = {
  add(a, b) {
    return a + b;
  },
  multiply(a, b) {
    return a * b;
  },
  subtract(a, b) {
    return a - b;
  },
  divide(a, b) {
    return a / b;
  }
};