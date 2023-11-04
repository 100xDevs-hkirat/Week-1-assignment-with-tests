

function isAnagram(str1, str2) {
 string1=str1.toLowerCase();
 string2=str2.toLowerCase();
    if(string1.length!==string2.length)
      return false;
    if(string1.split('').sort().join()==string2.split('').sort().join())
      return true;
    else 
      return false;
}

module.exports = isAnagram;
