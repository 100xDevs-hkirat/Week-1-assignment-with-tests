/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

// Sort the string by removing spaces and converting to lowercase
function sort(str){
  return str.split(' ').join('').toLowerCase().split('').sort().join('');
}


function isAnagram(str1, str2) {
  let str1LowerCase = sort(str1);
  let str2LowerCase = sort(str2);
  return str1LowerCase === str2LowerCase;
}

isAnagram('Debit Card', 'Bad Credit');

module.exports = isAnagram;
