/* exercise 4  =>
 JavaScript program to sort array of word according to every word length (function take two parameters first array , second 
aesc or desc )*/

function sort(arr, n) {
    if (n == "aesc") {
      arr.sort((a, b) => a.length - b.length);
    } else {
      arr.sort((a, b) => b.length - a.length);
    }
    console.log(arr);
  }
  
  sort(["mohamed", 'isn"t', "my", "name"], "desc");