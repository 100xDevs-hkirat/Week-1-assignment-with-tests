/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

//assdw wdsas

function isAnagram(str1, str2) {
  //case by case
  if (str1 === str2) return true;

  if (str1.length > str2.length || str1.length < str2.length) return false;

  var visitedIndexes = [];
  var count = 0;
  for(var i = 0; i < str1.length; i++){
    var char = str1[i];
    for(var j = 0; j < str2.length; j++){
      if(char.toLowerCase() === str2[j].toLowerCase() && !visitedIndexes.includes(j)){
        count++;
        visitedIndexes.push(j);
        break;
      }
    }
  }
  return (count === str1.length);

}

module.exports = isAnagram;
