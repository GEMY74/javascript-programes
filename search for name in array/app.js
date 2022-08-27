/* Ask the user to enter 5 names (using prompt) and store them into an array.
• Ask the user to enter a name to search for.
• If the name is found, alert the order of that name (ex: first, second, third, fourth, or
fifth).
• If the name is not found, show a message that "The name is not found“. */
var arr = [];
var count = 5;
var f = 0;

for (i = 0; i < count; i++) {
  var names = prompt("enter a name");

  arr.push(names);
}

var search = prompt("enter a name to search for");

arr.forEach((e, i) => {
  if (e.includes(search)) {
    var nums = [
      "one",
      "two",
      "three",
      "four",
      "five",
      "six",
      "seven",
      "eight",
      "nine",
      "ten",
      "eleven",
      "twelve",
      "thirteen",
      "fourteen",
      "fifteen",
      "sixteen",
      "seventeen",
      "eighteen",
      "nineteen",
      "twenty",
      "thirty",
      "forty",
      "fifty",
      "sixty",
      "seventy",
      "eighty",
      "ninety",
    ];
    alert(e + " index is the " + nums[i]);
    f = 1;
  }
});

if (f == 0) {
  console.log("name is not found");
}