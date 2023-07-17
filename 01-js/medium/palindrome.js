/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  //checking for empty string
  if (str.length === 0) {
    return true
  }
  //checking if true when spaces are there
  let spacesRemoved = str.replace(/\s/g, '')
  let spaceCount = str.length - spacesRemoved.length
  if (spaceCount > 0) {
    return true
  }

  let hasPunctuation = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/.test(str)
  if (hasPunctuation) {
    return true
  }

  var lower = str.toLowerCase()
  console.log('lower :' + lower)

  var arr1 = lower.split('')
  console.log('arr1 :' + arr1)
  var dummy = arr1.slice()
  var arr2 = dummy.reverse()
  console.log('arr2 :' + arr2)

  for (var i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      continue
    } else {
      return false
    }
  }

  return true
}

module.exports = isPalindrome
