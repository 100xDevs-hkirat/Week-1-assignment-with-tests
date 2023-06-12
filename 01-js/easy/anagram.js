/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
  //convert string to lower case

  lowesStr1 = str1.toLowerCase();
  lowesStr2 = str2.toLowerCase();

  //Split the string into an array of alphabates and sort them
  const sortStr1 = lowesStr1.split("").sort().join("");
  const sortStr2 = lowesStr2.split("").sort().join("");

  //returning true/false based on matching criteria
  return sortStr1 === sortStr2;
}

//calling isAnagram function by passing two string values
const anaString = isAnagram("Stomach", "mahcots");
console.log(`Is that input string is Anagram?
${anaString}`);

module.exports = isAnagram;
