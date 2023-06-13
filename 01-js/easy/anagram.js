/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  const sorted1= str1.toLowerCase().split("").sort().join("");
  const sorted2 = str2.toLowerCase().split('').sort().join('');
  if (sorted1 !== sorted2) {
    return false;
  }
  return true;
}

// function isAnagram(str1, str2){
//   str1 = str1.toLowerCase();
//   str2 = str2.toLowerCase();

//   if (str1.length !== str2.length) {
//     return false;
//   }

//   // Create character frequency maps for both strings
//   const charCount1 = {};
//   const charCount2 = {};

//   // Count the occurrences of each character in str1
//   for (let i = 0; i < str1.length; i++) {
//     const char = str1[i];
//     charCount1[char] = (charCount1[char] || 0) + 1;
//   }

//   // Count the occurrences of each character in str2
//   for (let i = 0; i < str2.length; i++) {
//     const char = str2[i];
//     charCount2[char] = (charCount2[char] || 0) + 1;
//   }

//   // Check if the character frequency maps are equal
//   for (const char in charCount1) {
//     if (charCount1[char] !== charCount2[char]) {
//       return false;
//     }
//   }

//   return true;
// }

module.exports = isAnagram;
