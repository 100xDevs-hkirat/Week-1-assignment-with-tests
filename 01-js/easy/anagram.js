/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {

  const charFreq={}

  str1=str1.toUpperCase();
  str2=str2.toUpperCase();

  if(str1.length != str2.length)
   return false;

  for(let i=0;i<str1.length;i++)
  {
    let c=str1.charAt(i);
    

    if(charFreq.hasOwnProperty(c))
       charFreq[c]++;
    else
       charFreq[c]=1;
  }

  for(let i=0;i<str2.length;i++)
  {
    let c=str2[i];

    if(charFreq.hasOwnProperty(c))
       charFreq[c]--;
    else 
       return false;
  }

  for(let c in charFreq)
     if(charFreq[c]!=0)
       return false;

  return true;

}


module.exports = isAnagram;
