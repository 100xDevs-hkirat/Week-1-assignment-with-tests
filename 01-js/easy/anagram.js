/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

/*
  INSPIRED BY getOrDefault Function in Java, If the key doesn't exists,
  it will return the default value back.

  If Anyone Wondering about what's a prototype, so Simply assume it to an object which helps 
  you define template for your js class i.e Map in this case, And anyways classes in Javascript is just 
  syntactic sugar, Basically it's just a constructor function and the methods you declare in the prototype object
  of that function are the methods of that class.

  And each object created using the new keywords refer to the protoype object of that constructor function 
  as a template.

  so just an example 

  function Demo(demo) {
    this.demo = demo;
  }

  Demo.prototype.hello = function() {
    console.log(`Hello, there !! ${this.demo}`);
  };

  // Please go and see what's different when we use a new Keyword before a function.
  const demoObj = new Demo("Demo Text");

  demoObj.hello();

  is equivalent to -> 

  class Demo {
    hello() {
      console.log(`Hello, there !! ${this.demo}`);
    }
  }

 */

Map.prototype.getOrDefault = function(key, defaultValue) {
  if (this.has(key)) {
    return this.get(key);
  }
  return defaultValue;
};


/**
 * 
 * @param {string} str1 
 * @param {string} str2 
 */
function isAnagram(str1, str2) {
  /** @type {Map<string,number>} */
  let map = new Map();
  str1.split("").map((char)=>{
    map.set(char.toLowerCase(),map.getOrDefault(char.toLowerCase(),0) + 1);
  });

  str2.split("").map((char) => {
    map.set(char.toLowerCase(),map.getOrDefault(char.toLowerCase(),0) - 1);
  });

  let result = true;

  map.forEach((value,key)=>{
    if(value != 0) {
      result = false;
    }
  })

  return result;
}

isAnagram('hello', 'hello!')

module.exports = isAnagram;
