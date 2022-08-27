function Pyramid(shape, n) {
   
      if (shape === "increament") {
        for (i = 1; i <= n; i++) {
          var str = " ".repeat(n - i);
          var str2 = "*".repeat(i * 2-1);
          console.log(str + str2 + str);
        }
      } else if (shape === "decrease") {
        for (i = n; i <= n; i--) {
          var str = " ".repeat(n - i);
          var str2 = "*".repeat(i * 2-1);
  
          console.log(str + str2 + str);
        }
      } else {
        console.log('The direction should be "increament" or "decrease');
      
    }
  
    if (n <= 0) {
      console.log("please enter a number bigger than zero");
    }
  }
  
  Pyramid("increament", '4');