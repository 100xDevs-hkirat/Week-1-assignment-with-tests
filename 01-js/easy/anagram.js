function sort(str) {
  let stringToArray = str.split("");
  stringToArray = stringToArray.sort();
  let stringConvert = stringToArray.join("");
  return stringConvert;
}

function isAnagram(str1, str2) {
  if (sort(str1.toLowerCase()) === sort(str2.toLowerCase())) {
    return true;
  } else {
    return false;
  }
}
module.exports = isAnagram;
