/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  //return false if both the lenghts of strings are different
   if(str1.length !== str2.length){
    return false;
}
// special case - converting all the strings to lowercase and removing any white spaces 
const conversion = (str) => str.toLowerCase().replace(/\s/g,'');
const convstr1 = conversion(str1);
const convstr2 = conversion(str2);
//creating a freq array of size 256 since there are 256 chars in total and assign them 
//value of 0
let freq = new Array(256);
for(let i = 0; i < 256;i++){
    freq[i]=0;
}

//chosing the unicode and incrementing the corresponding value in freq array
for(let i = 0; i<convstr1.length;i++){
    let ch = convstr1.charCodeAt(i);
    ++freq[ch];
}
//decrementing the unicode in the freq array
for(let j = 0 ; j<convstr2.length; j++){
    let ch = convstr2.charCodeAt(j);
    --freq[ch];
}

for(let k = 0 ; k < 256; k++){
    if(freq[k] !== 0){
        return false;
    }
}
return true;
}

module.exports = isAnagram;
