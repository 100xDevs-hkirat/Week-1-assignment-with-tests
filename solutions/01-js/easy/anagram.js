function isAnagram(str1, str2) {
  if (str1.length !== str2.length) {
    return false;
  }

  const charCount = {};

  for (let i = 0; i < str1.length; i++) {
    const char = str1[i];
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let i = 0; i < str2.length; i++) {
    const char = str2[i];

    if (!charCount[char]) {
      return false;
    }

    charCount[char]--;
  }

  return true;
}

module.exports = isAnagram;
