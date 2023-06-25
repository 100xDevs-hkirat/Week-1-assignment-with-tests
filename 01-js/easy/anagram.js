/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function sort(str)
{
  const strArray = str.split("");
  strArray.sort();
  const sortedStr = strArray.join("");
  return sortedStr;
}

function isAnagram(str1, str2) {
  str1LowerCase = str1.toLowerCase();
  str2LowerCase = str2.toLowerCase();

  if(sort(str1LowerCase) === sort(str2LowerCase))
  {
    return true;
  }
  else
  {
    return false;
  }
}

module.exports = isAnagram;
