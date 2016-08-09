// http://www.geeksforgeeks.org/largest-sum-contiguous-subarray/

var arr = [-1,-2,-3,1,2,3,4,5,0,6,-3,0,-4,1,2,3,4,5,0,6];
// arr = [-1,-1,-4,-6,-2];
// arr = [-2, -3, 4, -1, -2, 1, 5, -3];
// arr = [20,-3,4,-1,-2,1,5,-3];
// arr = [-2,-1];


//O(n) based solution Dynamic Programming
function getResult(arr){
  var prevPosSum = 0,prevNegSum=0,currPosSum=0,currNegSum= 0,max = 0,countNeg=0;
  var maxNeg = -1;
  var result = [];
  var index = 0;
  while(index<arr.length){
    while(arr[index]>=0){
      // console.log(arr[index],"P");
      currPosSum+= arr[index];
      index++;
    }

    while(arr[index]<=0){
        // console.log(arr[index],"N");
        maxNeg = Math.max(maxNeg,arr[index]);
        currNegSum+= arr[index];
        countNeg++;
        index++;

    }

    max = Math.max(prevPosSum+prevNegSum+currPosSum,currPosSum,prevPosSum,max);
    prevPosSum = currPosSum;
    prevNegSum = currNegSum;
    // console.log("#",currPosSum,currNegSum,max,maxNeg);
    currNegSum = currPosSum = 0;

  }
if(countNeg == arr.length){return maxNeg;}
  else  return max;
}


console.time("N");
console.log(getResult(arr));
console.timeEnd("N");
