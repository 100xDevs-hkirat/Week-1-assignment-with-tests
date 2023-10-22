/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {

  var len1=str1.length;
  var len2=str2.length;
  str1=str1.toLowerCase();
  str2=str2.toLowerCase();
  if(len1!=len2)
  {
    return false;
  }
  const char1=new Map();
  const char2=new Map();
  for(let i=0;i<len1;i++)
  {
    if(char1.has(str1[i]))
    {
      let value=char1.get(str1[i]);
      char1.set(str1[i] , value+1);
    }
    else
    {
      char1.set(str1[i] , 1);
    }
  }
  for(let i=0;i<len1;i++)
  {
    if(char2.has(str2[i]))
    {
      let value=char2.get(str2[i]);
      char2.set(str2[i] , value+1);
    }
    else
    {
      char2.set(str2[i] , 1);
    }
  }
  for(let [key , value] of char1)
  {
    if(char2.get(key)!=value)
    {
      return false;
    }
    //console.log(value);
  }
  return true;
}

//console.log(isAnagram("yo" , "oy"));

module.exports = isAnagram;
