"use strict";

var _testingPractice = require("./testing-practice");
it("First letter capitalized", () => {
  expect((0, _testingPractice.capitalize)("hello")).toMatch("Hello");
});
it("Reverses string", () => {
  expect((0, _testingPractice.reverseString)("hello")).toMatch("olleh");
});
it("Adds two numbers", () => {
  expect(_testingPractice.calculator.add(5, 3)).toEqual(8);
});
it("Multiplies two numbers", () => {
  expect(_testingPractice.calculator.multiply(5, 3)).toEqual(15);
});
it("Subtracts two numbers", () => {
  expect(_testingPractice.calculator.subtract(5, 3)).toEqual(2);
});
it("Divides two numbers", () => {
  expect(_testingPractice.calculator.divide(9, 3)).toEqual(3);
});
it("Shifts letters", () => {
  expect((0, _testingPractice.caesarCipher)("xyz", 3)).toMatch("abc");
});
it("Tests case preservation", () => {
  expect((0, _testingPractice.caesarCipher)("HeLLo", 3)).toMatch("KhOOr");
});
it("Tests punctuation", () => {
  expect((0, _testingPractice.caesarCipher)("Hello, World!", 3)).toMatch("Khoor, Zruog!");
});