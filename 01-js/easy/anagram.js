/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    let arr1 =[];
    let arr2 =[];
    
    arr1[25] = 0;
    arr2[25] = 0;

    if(str1.length == str2.length){
      for(let i = 0 ; i < str1.length ;i++){
        arr1[str1.charCodeAt(i)-'a'.charCodeAt(0)] =  arr1[str1.charCodeAt(i)-'a'.charCodeAt(0)]+1 || 1;
        arr2[str2.charCodeAt(i)-'a'.charCodeAt(0)] =  arr2[str2.charCodeAt(i)-'a'.charCodeAt(0)]+1 || 1;
      }
    }else{
      return false;
    }
    
    return JSON.stringify(arr1) == JSON.stringify(arr2);
}

module.exports = isAnagram;
