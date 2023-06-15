const isPalindrome = require("../../medium/palindrome.js");

describe("isPalindrome", () => {
  test("isPalindrome functions exists", () => {
    expect(typeof isPalindrome).toEqual("function");
  });
});

test("return true or false", () => {
  expect(isPalindrome("hello")).toBe(false);
  expect(isPalindrome("dad")).toBe(true);
  expect(isPalindrome("madam")).toBe(true);
});

test("for single character", () => {
  expect(isPalindrome("a")).toBe(true);
  expect(isPalindrome("z")).toBe(true);
});
