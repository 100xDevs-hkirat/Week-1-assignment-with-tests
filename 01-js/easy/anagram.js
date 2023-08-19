/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) {
str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();

    

    str1_array = [];
    str2_array = [];
    

    for (var i =0; i<str1.length; i++){
        if (str1[i] == " "){
            continue;
        }

        str1_array .push(str1[i]);
    }

    for (var i =0; i<str2.length; i++){
        if (str2[i] == " "){
            continue;
        }

        str2_array .push(str2[i]);
    }

    
    for (var i =0; i<str2.length; i++){
        str2_array.push(str2[i]);
    }

    for (var i = 0; i<str1.length-1; i++){
        for (var j=0; j<str1.length-1-i; j++){
            if (str1_array[j] > str1_array[j+1]){
                var temp = str1_array[j];
                str1_array[j] = str1_array[j+1];
                str1_array[j+1] = temp;
            }
        }
    }
    
    for (var i = 0; i<str2.length-1; i++){
        for (var j=0; j<str2.length-1-i; j++){
            if (str2_array[j] > str2_array[j+1]){
                var temp = str2_array[j];
                str2_array[j] = str2_array[j+1];
                str2_array[j+1] = temp;
            }
        }
    }
    

    for (var i =0; i<str1_array.length; i++){
        if (str1_array[i] != str2_array[i]){
            return false;
        }
        else{
            return true;
        }
    }
}

module.exports = isAnagram;
