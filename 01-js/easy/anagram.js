/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  let string1=[];
  let string2=[];
  if(str1.length!=str2.length){
    return false;
  }
  for(let i=0;i<str1.length;i++){
    string1.push(str1.charAt(i).toLowerCase());
    string2.push(str2.charAt(i).toLowerCase());
  }
  for(let i=0;i<string1.length;i++){
    let boo=true;
    for(let j=0;j<string2.length;j++){
      if(string2[j]==string1[i]){
        string2.splice(j,1);
        boo=false;
        break;
      }
    }
    if(boo){
      return false;
    }
  }
  return true;
}

/* let s1="spar";
let s2="psar";
console.log(isAnagram(s1,s2)); */

module.exports = isAnagram;
