/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
for(let p = 0; p< str1.length ;p++){
  
      for(let i = 0 ; i< str2.length; i++){
        if(str1[p]=== str2[i]){
          a.push(str2[i])
          break ;
        }
      }
      
      }
      
      if(JSON.stringify(Array.from(str1)) === JSON.stringify(a)){
        console.log("function is anagram")
      }

}

module.exports = isAnagram;
