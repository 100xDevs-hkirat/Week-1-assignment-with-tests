/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
    //making both the strings in lowercase
    var str11 = str1.toLowerCase();
    var str22 = str2.toLowerCase();

    //converting strings to arrays
    var array1 = str11.split("");
    var array2 = str22.split("");

    //sorting the arrays;
    array1=array1.sort();
    array2=array2.sort();
    
    //converting array to string
    var str1s = array1.join("");
    var str2s = array2.join("");

    //checking if both are equal or not
    if(str1s==str2s){
      return true;
    }
    else{
      return false;
    }

}

module.exports = isAnagram;
