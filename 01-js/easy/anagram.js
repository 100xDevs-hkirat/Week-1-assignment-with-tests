/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {

  const correctstr1 = str1.toLowerCase();
  const correctstr2 = str2.toLowerCase();
  
  // split('') is used to split the cleaned strings into an array of individual characters.
  // sort() is used to sort the array of characters in lexicographic order.
  // join('') is used to join the sorted array of characters back into a single string.

  const sortedstr1 = correctstr1.split('').sort().join('');
  const sortedstr2 = correctstr2.split('').sort().join('');

  return (sortedstr1 === sortedstr2)
}

module.exports = isAnagram;
