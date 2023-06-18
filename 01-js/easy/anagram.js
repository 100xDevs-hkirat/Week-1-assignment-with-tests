/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  // Convert the strings to lowercase and remove any non-alphabetic characters
  const lowerStr1 = str1.toLowerCase();
  const lowerStr2 = str2.toLowerCase();

  // Check if the lengths of the strings are equal
  if (lowerStr1.length !== lowerStr2.length) {
    return false;
  }

  // Convert the strings to arrays, sort them, and join them back to strings
  const sortedStr1 = lowerStr1.split("").sort().join("");
  const sortedStr2 = lowerStr2.split("").sort().join("");

  // Compare the sorted strings
  return sortedStr1 === sortedStr2;
}

module.exports = isAnagram;
