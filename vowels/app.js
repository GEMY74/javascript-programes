/* exercise 4 =>  Create a function that accepts a string and returns the number of vowels in that
 string (vowel characters are : a, e, o, u, i)
• Ask the user to enter a string
• Count the number of vowels in that string using the created function.
 */

var filtering = function (str) {
  var vowel = ["a", "A", "e", "E", "i", "I", "o", "O", "u", "U"];
  var Count = 0;

  for (i = 0; i < str.length; i++) {
    if (vowel.indexOf(str[i]) !== -1) {
      Count++;
    }
  }

  return Count;
};

console.log(filtering(prompt("enter a string")));