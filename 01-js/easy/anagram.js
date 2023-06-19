/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  str1=str1.toLowerCase();
  str2=str2.toLowerCase();
  str1=str1.split('');
  str2=str2.split('');
  str2=str2.sort();
  str1=str1.sort();
  str2=str2.join('');
  str1=str1.join('');
if(str1==str2){
  return true;
}else{
  return false;
}
}


// if('naveen '==['naveen']){
//     console.log('nave');
// }else{
//     console.log('not ');
// }
module.exports = isAnagram;
