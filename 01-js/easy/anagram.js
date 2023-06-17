/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()
  let alphaStr1 = {}
  for(let i = 0; i< str1.length; i++){
    if( str1[i] in alphaStr1){
      alphaStr1[str1[i]] +=1
    }else{
      alphaStr1[str1[i]]=1
    }
  }
  // console.log(alphaStr1)
  console.log(str1,str2)
  for(let j = 0;j< str2.length;j++){
    if(str2[j] in alphaStr1){
      if(alphaStr1[str1[j]]==0){
        // console.log("0")
        return false
      }
      alphaStr1[str1[j]] -=1
    }else{
      // console.log("empty")
      return false
    }
  }
  let ret = true
  Object.keys(alphaStr1).forEach((e)=>{
    if(alphaStr1[e]!=0){
      console.log(alphaStr1[e])
      ret = false
    }
  })
  return ret
}

const ret = isAnagram("openai","open")
console.log(ret)


module.exports = isAnagram;
