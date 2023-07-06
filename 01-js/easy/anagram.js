/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  let map = new Map()

  if (str1.length !== str2.length) {
    return false
  }

  for (let i = 0; i < str1.length; i++) {
    let str = str1[i].toLowerCase()
    map.set(str, (map.get(str) | 0) + 1)
  }

  for (let i = 0; i < str1.length; i++) {
    let str = str2[i].toLowerCase()
    if (!map.has(str)) {
      return false
    }

    let value = map.get(str) - 1
    if (value === 0) {
      map.delete(str)
      continue
    }
    map.set(str, value)
  }

  console.log(map);
  return map.size === 0 ? true : false
}

module.exports = isAnagram;
