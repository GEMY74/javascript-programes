//  function to take string has lower and upper case letters as a parameter and convert upper case to lower and lower to upper
//Input : AbCDe
//output: aBcdE

function reverse(input) {
    var arr = input.split("");
  
    for (i = 0; i < arr.length; i++) {
      if (arr[i] === arr[i].toLowerCase()) {
        arr[i] = arr[i].toUpperCase();
      } else {
        arr[i] = arr[i].toLowerCase();
      }
    }
  
    var input = arr.join("");
    console.log(input);
  }
  
  reverse("AbCDe");