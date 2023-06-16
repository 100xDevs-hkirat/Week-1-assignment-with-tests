/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  let s = ""
  let n = str.length

  for (let i = 0; i < n; i++) {
    if ((str[i] >= "a" && str[i] <= "z") || (str[i] >= "A" && str[i] <= "Z")) {
      s += str[i]
    }
  }

  let m = s.length
  s = s.toLowerCase()

  for (let i = 0; i < m / 2; i++) {
    let newInd = m - i - 1

    if (s[i] !== s[newInd]) {
      return false
    }
  }

  console.log(m)
  console.log(s)

  return true
}

module.exports = isPalindrome
