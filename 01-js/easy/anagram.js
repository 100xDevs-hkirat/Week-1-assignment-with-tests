/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {

  if (str1.length !== str2.length)
    return false;

  //let arr1 = [...str1];//we can also use Array.from(str1) or str1.split("") array methods to do the same instead of Spread Operator

  let arr1 = str1.toLowerCase().split("").sort().toString();
  let arr2 = str2.toLowerCase().split("").sort().toString();
  console.log(arr1);
  console.log(arr2);

  if (arr1 === arr2)
    return true;

  return false;


}

module.exports = isAnagram;
