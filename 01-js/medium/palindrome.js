/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function reverseString(str)
{
    let reverse = "";

    for(let i = str.length - 1; i >= 0; i--)
    {
        reverse = reverse + str[i]
    }
    return reverse;
}

function transform(str)
{
    answer = "";

    for(let i = 0; i < str.length; i++)
    {
        if(str[i] == " " || str[i] == "," || str[i] == "?" || str[i] == "!" || str[i] == ".")
        {}
        else
        {
            answer += str[i]
        }
    }
    return answer;
}

function isPalindrome(str)
{
    str = str.toLowerCase()
    str = transform(str)
    if(str === reverseString(str))
        return true;
    else
        return false;
}

module.exports = isPalindrome;
