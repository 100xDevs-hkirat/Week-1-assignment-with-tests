/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  // function to prepare the input strings by removing spaces and converting to lowercase
  const prepareString = (str) => str.replace(/\s/g, "").toLowerCase();

  // Prepare the input strings
  const preparedStr1 = prepareString(str1);
  const preparedStr2 = prepareString(str2);

  // Compare the sorted and joined strings
  return (
    preparedStr1.split("").sort().join("") ===
    preparedStr2.split("").sort().join("")
  );
}

module.exports = isAnagram;
