/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

const aToZ = new Set(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"
])

function isPalindrome(str) {
  let left = 0
  let right = str.length - 1

  while (left < right) {
    let cont = false

    if (!aToZ.has(str[left].toLowerCase())) {
      left += 1
      cont = true
    }
    if (!aToZ.has(str[right].toLowerCase())) {
      right -= 1
      cont = true
    }

    if (cont) {
      continue
    }

    if (str[left].toLowerCase() !== str[right].toLowerCase()) {
      return false
    }
    left += 1
    right -= 1
  }

  return true;
}

module.exports = isPalindrome;
