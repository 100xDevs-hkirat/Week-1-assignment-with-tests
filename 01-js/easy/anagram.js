/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

// To check if str1 and str 2 are rearrangements of each other
// if lengths are different they are not
// to compare the str elements first convert strings to array
// sort these arrays
// compare the 2 sorted arrays with a simple loop

function isAnagram(str1, str2) {
   
  //trim
  str1.trim();
  str2.trim();

  // if lengths mismatch the strings can't be equal
  if (str1.length !== str2.length) {
    return false;
  }  
  
  // if lengths both strings are empty, they are equal  
  if (str1.length === 0 && str2.length === 0) {
    return true;
  }

  // replace all spaces in string with nothing
  str1.replace(/ /g, "");
  str2.replace(/ /g, "");

  // converting strings to array
  const arr1 = str1.split('');
  const arr2 = str2.split('');

  // sort the arrays and join to strings
  arr1.sort();
  arr2.sort();

  // compare the arrays
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    } else {
      return true;
    }
  }
} 

module.exports = isAnagram;