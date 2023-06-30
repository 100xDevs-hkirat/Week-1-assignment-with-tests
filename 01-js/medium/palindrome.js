function reverse(str) {
  let answer = "";
  for (let i = str.length - 1; i >= 0; i--) {
    answer += str[i];
  }
  return answer;
}

function transform(str) {
  let answer = "";
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === " " ||
      str[i] === "," ||
      str[i] === "?" ||
      str[i] === "!" ||
      str[i] === "." ||
      str[i] === ";"
    ) {
    } else {
      answer += str[i];
    }
  }

  return answer;
}

function isPalindrome(str) {
  str = str.toLowerCase();
  str = transform(str);
  let reverseString = reverse(str);
  if (reverseString === str) {
    return true;
  } else {
    return false;
  }
}

module.exports = isPalindrome;
