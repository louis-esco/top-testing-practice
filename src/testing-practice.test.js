import {
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
} from "./testing-practice";

it("First letter capitalized", () => {
  expect(capitalize("hello")).toMatch("Hello");
});

it("Reverses string", () => {
  expect(reverseString("hello")).toMatch("olleh");
});

it("Adds two numbers", () => {
  expect(calculator.add(5, 3)).toEqual(8);
});

it("Multiplies two numbers", () => {
  expect(calculator.multiply(5, 3)).toEqual(15);
});

it("Subtracts two numbers", () => {
  expect(calculator.subtract(5, 3)).toEqual(2);
});

it("Divides two numbers", () => {
  expect(calculator.divide(9, 3)).toEqual(3);
});

it("Shifts letters", () => {
  expect(caesarCipher("xyz", 3)).toMatch("abc");
});

it("Tests case preservation", () => {
  expect(caesarCipher("HeLLo", 3)).toMatch("KhOOr");
});

it("Tests punctuation", () => {
  expect(caesarCipher("Hello, World!", 3)).toMatch("Khoor, Zruog!");
});

it("Checks output calculations", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
