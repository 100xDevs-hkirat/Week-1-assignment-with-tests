/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  var mp = new Map();
  str1 = str1.toLowerCase();
  str2 = str2.toLowerCase();
  
    for( var i =0; i< str1.length; i++){
        if(!mp.has(str1[i])){
            mp.set(str1[i],1);
        }
        else{
            mp.set(str1[i], mp.get(str1[i]) + 1);
        }
    }

    for(let j = 0; j< str2.length; j++){
        if( !mp.has(str2[j]) ||mp.get(str2[j])<=0  ){
            return false;
        }
        mp.set(str2[j], mp.get(str2[j]) - 1);
    }
    
    for (let [key, value] of mp) {
        if (value > 0) return false;
      }
    return true;
}

module.exports = isAnagram;
