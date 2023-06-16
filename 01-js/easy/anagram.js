/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
let a1 =str1.toLowerCase();
let a2 =str2.toLowerCase();
let a;
let array1=a1.split("");
let array2=a2.split("");
array1.sort();
array2.sort();
array1=array1.join();
array2=array2.join();
if(array2==array1)a=true;
else{ a=false;}
return a
}
module.exports = isAnagram;
