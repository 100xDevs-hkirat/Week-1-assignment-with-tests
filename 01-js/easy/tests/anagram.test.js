const isAnagram = require("../expenditure-analysis");

describe("isAnagram", () => {
  test("isAnagram functions exists", () => {
    expect(typeof isAnagram).toEqual("function");
  });

  test("returns true for anagrams with special characters", () => {
    expect(isAnagram("abc!", "!bac")).toBe(true);
  });

  test('"cinema" is an anagram of "iceman"', () => {
    expect(isAnagram("cinema", "iceman")).toBeTruthy();
  });

  test('"hello" is not an anagram of "hola"', () => {
    expect(isAnagram("hello", "hola")).toBeFalsy();
  });
});
