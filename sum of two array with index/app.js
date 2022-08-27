//  There are two arrays with individual values, write a JavaScript program to compute the sum
//of each individual index value from the given arrays.
// Sample array :
// - array1 = [1,0,2,3,4];
// - array2 = [3,5,6,7,8,13];
// - Expected Output : [4, 5, 8, 10, 12, 13]

function sum(arr1, arr2) {
    var result = [];
    var i = 0;
  
    if (arr1.length > arr2.length) {
      result = arr1;
      for (i; i < arr1.length; i++) {
        if (arr2[i]) {
          result[i] += arr2[i];
        } else {
          result[i];
        }
      }
    } else {
      result = arr2;
      for (i; i < arr2.length; i++) {
        if (arr1[i]) {
          result[i] += arr1[i];
        } else {
          result[i];
        }
      }
    }
  
    console.log(result);
  }
  
  sum([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]);