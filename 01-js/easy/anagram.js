/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/


/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/



// Function to calculate the frequency of characters in a string
function frequencyOfString(str) {
  let frequencyOfChars = {};
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    frequencyOfChars[char] = (frequencyOfChars[char] || 0) + 1;
  }
  return frequencyOfChars;
}

// Function to compare the frequency of characters in 2 strings
function compareStrings(str1, str2) {
  let frequency1 = frequencyOfString(str1);
  let frequency2 = frequencyOfString(str2);

  let chars1 = Object.keys(frequency1);
  let chars2 = Object.keys(frequency2);

  for (let i = 0; i < chars1.length; i++) {
    let char = chars1[i];
    if (frequency1[char] !== frequency2[char]) {
      return false;
    }
  }
  return true;
}

// Function to check if 2 strings are anagrams using a different approach
function checkAnagram(str1, str2) {
  str1 = str1.toLowerCase().replace(/ /g, "");
  str2 = str2.toLowerCase().replace(/ /g, "");

  if (str1.length !== str2.length) {
    return false;
  }

  let compareResult = compareStrings(str1, str2);
  return compareResult;
}

// Function to convert a string to a sorted format
function convertString(str) {
  str = str.toLowerCase();
  let charArray = str.split('');
  let sortedArray = charArray.sort();
  let resultString = sortedArray.join('');
  return resultString;
}

// Function to check if 2 strings are anagrams using a different approach
function checkAnagramAlternative(str1, str2) {
  if (convertString(str1) === convertString(str2)) {
    return true;
  } else {
    return false;
  }
}

function errorHandling(str) {
  if (typeof str !== 'string' || !str.trim()) {
    throw new Error('Input should be a non-empty string');
  }
  return str;

  /*  if (typeof str !== 'string') {
      throw new Error('Input should be a string');
    }
  
    if (str.trim().length === 0) {
      return {};
    }
  */
}

// Function to validate if input is a non-empty string
function validateString(str) {
  if (typeof str !== 'string') {
    throw new Error('Input should be a string');
  }

  if (str.trim().length === 0) {
    return {};
  }

  return str;
}

// Function to determine if 2 strings are anagrams using both approaches
function result(str1, str2) {
  // creating issue with test cases if i includes edge cases
  // const validatedStr1 = validateString(str1);
  // const validatedStr2 = validateString(str2);


  let validatedStr1 = str1;
  let validatedStr2 = str2;

  // Check anagram using alternative approach or regular approach
  if (checkAnagramAlternative(validatedStr1, validatedStr2) && checkAnagram(validatedStr1, validatedStr2)) {
    return true;
  } else {
    return false;
  }
}

// Main function to determine if 2 strings are anagrams
function isAnagram(str1, str2) {
  return result(str1, str2);
}

// Export the isAnagram function for use in other modules
module.exports = isAnagram;

// Test cases 
/*
console.log(isAnagram('openai', 'aiopen'));
console.log(isAnagram('hello', 'world'));
*/






