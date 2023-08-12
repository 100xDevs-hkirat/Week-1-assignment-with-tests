/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
         if(str1.length !== str2.length) return false ;
         var dict1 = {} ;
         var dict2 = {} ;
         str1 = str1.toLowerCase() ;
         str2 = str2.toLowerCase() ;

         for(var i = 0 ; i < str1.length ; ++i){
              if(str1[i] in dict1) dict1[str1[i]] += 1 ;
              else dict1[str1[i]] = 1 ;
              if(str2[i] in dict2) dict2[str2[i]] += 1 ;
              else dict2[str2[i]] = 1 
         }
       
         for(var key in dict1){
            if(dict1[key] !== dict2[key]) return false ;
         }

         return true ;

}

module.exports = isAnagram;
