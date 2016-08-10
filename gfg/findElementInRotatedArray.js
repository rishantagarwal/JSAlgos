// http://www.geeksforgeeks.org/find-the-missing-number/
// Assuming array has been rotated in Clockwise order
// [5,4,3,2,1] becomes [2,1,5,4,3]

/// Solution works in O(n) worst case and is useless
var arr = [2,1,5,4,3];

function getResult(arr,num){

  var pivot = getPivot(arr);
  var isIncreasing;
  var high,low;
  var n = arr.length;



  if(arr[pivot+1]>arr[pivot+2] && arr[pivot+2]>arr[pivot+3]){isIncreasing = 0;}
  if(arr[pivot+1]<arr[pivot+2] && arr[pivot+2]<arr[pivot+3]){isIncreasing = 1;}

   if(isIncreasing){
     if(num > arr[pivot] || num < arr[pivot+1]) return -1;
     else if(num <= arr[n-1]){low = pivot+1; high = n-1;}
     else if(num > arr[n-1]){low = 0; high = pivot;}
     }
   else {
     if(num < arr[pivot] || num > arr[pivot+1]) return -1;
     else if(num >= arr[n-1]){low = pivot+1; high = n-1;}
     else if(num < arr[n-1]){low = 0; high = pivot;}
   }

  //  console.log(isIncreasing);

  return binarySearch(arr,low,high,num,isIncreasing);
}

function binarySearch(arr,low,high,num,isIncreasing){
  var mid = low + Math.floor(high-low)/2;

  if(num > arr[mid]) {
    if(isIncreasing){return binarySearch(arr,mid+1,high,num,isIncreasing);}
    else { return binarySearch(arr,low,mid-1,num,isIncreasing);}
  }
  else if(num < arr[mid]){
    if(!isIncreasing){return binarySearch(arr,mid+1,high,num,isIncreasing);}
    else { return binarySearch(arr,low,mid-1,num,isIncreasing);}
  }
  else if(num == arr[mid]){return mid;}
  else if(high<=low){return -1;}
}



function getPivot(arr){
  var n= arr.length;
  for(var i=0;i<n-2;i++){
    if(arr[i]<arr[i+1] && arr[i+1]>arr[i+2]){return i+1;}
    if(arr[i]>arr[i+1] && arr[i+1]<arr[i+2]){return i+1;}
  }

}

console.log(getResult(arr,5));
