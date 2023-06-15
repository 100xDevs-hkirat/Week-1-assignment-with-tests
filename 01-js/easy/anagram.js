/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
      const a1=str1.toLowerCase();
      const a2=str2.toLowerCase();
      const ans1=a1.split("");
      const ans2=a2.split("");
       ans1.sort();
       ans2.sort();
        const an1=ans1.join("");
         const an2=ans2.join("");
      if(an1==an2){
        return true;
      }
  else{
    return false;
  }

}

module.exports = isAnagram;
