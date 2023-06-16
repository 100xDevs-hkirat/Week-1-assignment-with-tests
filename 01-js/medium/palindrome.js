function isPalindrome(str) {
  var i = 0;
  var j = str.length - 1;
  while (i < j) {
    var leftChar = str.charAt(i).toLowerCase();
    var rightChar = str.charAt(j).toLowerCase();

    // Skip non-alphanumeric characters
    if (!isAlphanumeric(leftChar)) {
      i++;
      continue;
    }
    if (!isAlphanumeric(rightChar)) {
      j--;
      continue;
    }

    if (leftChar !== rightChar) {
      return false;
    }
    i++;
    j--;
  }
  return true;
}

function isAlphanumeric(char) {
  var alphanumericRegex = /^[a-z0-9]+$/i;
  return alphanumericRegex.test(char);
}

module.exports = isPalindrome;
