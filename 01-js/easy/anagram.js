/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {

    if (str1.length != str2.length) {
        return false;
    }

    let countObject = {};

    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    
    for (let i=0; i<str1.length; ++i) {
        let char = str1.charAt(i);
        if (countObject.hasOwnProperty(char)) {
            let count = countObject[char];
            ++count;
            countObject[char] = count;
        } else {
            countObject[char] = 1;
        }
    }

    // console.log("Object After STR1: ", countObject);

    for (let i=0; i<str2.length; ++i) {
        let char = str2.charAt(i);
        if (countObject.hasOwnProperty(char)) {
            let count = countObject[char];
            --count;
            countObject[char] = count;
        } else {
            return false;
        }
    }

    // console.log("Object After STR2: ", countArray);

    let allValues = Object.values(countObject);

    for (let i=0; i<allValues.length; ++i) {
        if (allValues[i] != 0) {
            return false;
        }
    }

    return true;
}

// let flag = isAnagram("Hello", "World");
// console.log("FLAG: ", flag);

// flag = isAnagram("silent", "listen");
// console.log("FLAG: ", flag);

module.exports = isAnagram;
