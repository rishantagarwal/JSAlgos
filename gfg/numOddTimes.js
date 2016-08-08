//GeeksforGeeks
//http://www.geeksforgeeks.org/find-the-number-occurring-odd-number-of-times/

var arr = [1,2,3,2,3,1,2];

function numOddTimes(arr){
var result = 0;
arr.map(function(index){
   result =  result ^ index;
})
  return result;
}

console.time("O(n)O(1)");
console.log(numOddTimes(arr));
console.timeEnd("O(n)O(1)");
