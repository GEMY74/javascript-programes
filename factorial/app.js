/* 
• Ask the user to enter a number
• Write code to calculate the factorial of the number (factorial 5 = 5*4*3*2*1)
• Alert the result to the user
*/

var cont = true;

function factorial(num) {
  if (num) {
    if (num < 0) return -1;
    else if (num <= 1) return 1;
    else {
      return num * factorial(num - 1);
    }
  } else if (typeof num != "number") {
    prompt("pleas enter a valid number");
  }
}

while (cont) {
  var num = parseInt(prompt("enter a number"));
  console.log(factorial(num));
  cont = confirm("need any another operation");
}