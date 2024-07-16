"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.analyzeArray = analyzeArray;
exports.caesarCipher = caesarCipher;
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
function caesarCipher(string, shift) {
  function getCharCode(letter) {
    return letter === letter.toLowerCase() ? letter.charCodeAt() - 96 : letter.charCodeAt() - 64;
  }
  function getLetter(code) {
    return String.fromCharCode(code);
  }
  const stringArr = string.split("");
  for (let i = 0; i < stringArr.length; i++) {
    const charCode = getCharCode(stringArr[i]);
    // Checks that char is letter
    if (charCode > 0 && charCode < 27) {
      // Checks if letter is lowercase
      if (stringArr[i] === stringArr[i].toLowerCase()) {
        const letterCode = (charCode + shift - 1) % 26 + 97;
        stringArr[i] = getLetter(letterCode);
      } else {
        const letterCode = (charCode + shift - 1) % 26 + 65;
        stringArr[i] = getLetter(letterCode);
      }
    }
  }
  return stringArr.join("");
}
function analyzeArray(arr) {
  return {
    average: arr.reduce((acc, value) => acc + value, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length
  };
}