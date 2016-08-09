// http://www.geeksforgeeks.org/find-the-missing-number/

var arr = [1,2,4,5];

function getResult(arr){
  var n = arr.length;
  n = (n-1)^(n);
  for(var index of arr){
    n = n^index^arr[index];
  }

  return n;
}


console.log(getResult(arr));
