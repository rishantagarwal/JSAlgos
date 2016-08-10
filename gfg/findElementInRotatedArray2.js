var arr = [6,7,1,2,3,4,5];
var num = 1;

// Assuming array to be Increasing and distinct
function getResult(arr,num){
  var low=0,
      high = arr.length,
      mid = low + Math.floor((high-low)/2);

  return binarySearch(arr,low,high,num);
}

function binarySearch(arr,low,high,num){
  var mid = low + Math.floor((high-low)/2);
  if(arr[mid] == num){ return mid;}
  else if(high - low == 1){
     if(arr[high] == num) return high;
     else if(arr[low] == num) return low;
     else return -1;
   }
  else if(isSorted(arr,mid+1,high) && isInRange(arr,mid+1,high,num)) {
    if(num > arr[mid]){return binarySearch(arr,mid+1,high,num);}
    else return binarySearch(arr,low,mid-1,num);
  }

}


function isSorted(arr,low,high){
  return arr[high] > arr[low];
}

function isInRange(arr,low,high,num){
  return (num > arr[low] && num < arr[high]);
}





console.log(getResult(arr,num));
