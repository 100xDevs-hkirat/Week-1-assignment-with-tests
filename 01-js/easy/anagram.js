/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function createDict(str1){
  dict1 = new Map();
  for(i of str1){
    if(dict1.has(i)){
      dict1.set(i,dict1.get(i) + 1);
    }
    else{
      dict1.set(i,1);
    }
  }

  return dict1;
}

function isEquivalent(dict1, dict2){
  if (dict1.size !== dict2.size){
    return false;
  }
  for (x of dict1.keys()){
    if(!dict2.has(x)){
      return false;
    }
    else{
      if(dict1.get(x) !== dict2.get(x)){
        return false;
      }
    }
  }
  return true;
}



function isAnagram(str1, str2) {
  var a = str1.toLowerCase();
  var b = str2.toLowerCase();
  let x = createDict(a);
  let y = createDict(b);
  var v = isEquivalent(x,y);
  return v;
}



module.exports = isAnagram;
