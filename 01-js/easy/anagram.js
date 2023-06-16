/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
    // if length of both strings is not equal it means they cannot be anagram
    if (str1.length != str2.length) {
        return false;
    }

    // convert both strings to lowercase
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    // initialise two maps for storing frequency of every character in key value pair
    let map1 = new Map();
    let map2 = new Map();

    // filling maps with frequency of character

    for (let i = 0; i < str1.length; i++) {
        let char = str1.charAt(i);
        if (map1.has(char)) {
            let already = map1.get(char);
            map1.set(char, already + 1);
            continue;
        }
        map1.set(char, 1);
    }

    for (let i = 0; i < str2.length; i++) {
        let char = str2.charAt(i);
        if (map2.has(char)) {
            let already = map2.get(char);
            map2.set(char, already + 1);
            continue;
        }
        map2.set(char, 1);
    }

    // ascii of lower case alphabates are from 97 to 122

    for (let pointer = 97; pointer <= 122; pointer++) {
        // converting ascii to character
        let char = String.fromCharCode(pointer);

        // if char present in both maps then we can check for frequency
        if (map1.has(char) && map2.has(char)) {
            if (map1.get(char) != map2.get(char)) {
                return false;
            }
            continue;
        }

        // if char present in only one map means strigs are not anagram
        if (map1.has(char) || map2.has(char)) {
            return false;
        }
    }
    // if all checks passes means strings are anagram
    return true;
}
module.exports = isAnagram;
