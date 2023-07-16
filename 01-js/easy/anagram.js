/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function sort(str){
    let array = str.split("");
    array = array.sort();
    let sortedstring = array.join("");
    return sortedstring;
}

function isAnagram(str1, str2) {
    let str1_l = str1.toLowerCase();
    let str2_l= str2.toLowerCase();
    if(sort(str1_l)==sort(str2_l))
        return true;
    else
        return false;
}

let ans = isAnagram("rasp","pasr");
console.log(ans);

module.exports = isAnagram;
