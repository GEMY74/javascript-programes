/*
exercise 1 =>> • Create a function that accepts an object as a parameter.
• The function should alert the properties and their values but not the function.
*/

function alerting(obj) {
  var { func, ...copy } = obj;
  var display = Object.entries(copy);
  alert(display);
}

alerting({
  name: "mohamed",
  age: 25,
  track: "Front_end",
  func: function () {
    console.log("hello");
  },
});
