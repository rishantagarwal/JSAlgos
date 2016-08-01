// Code for https://www.hackerrank.com/contests/projecteuler/challenges/euler001

function processData(input) {
    //Enter your code here
    var n = input[0];
     for(var i=1;i<=n;i++)  {
       console.log(getCount(input[i]));
     }
}

function getCount(x){
  var n=0;
  var sum = 0;
  x= x-1;
  n = Math.floor(x/3);
  sum+= (3*n*(n+1))/2;
  n = Math.floor(x/5);
  sum+= (5*n*(n+1))/2;
  n = Math.floor(x/15);
  sum-= (15*n*(n+1))/2;
  return sum;
}

// process.stdin.resume();
// process.stdin.setEncoding("ascii");
// _input = "";
// process.stdin.on("data", function (input) {
//     _input += input;
// });
//
// process.stdin.on("end", function () {
//    processData(_input);
// });

processData([2,10,100]);
