// http://www.geeksforgeeks.org/find-the-missing-number/

var arr = [2,1,5,4,3];

// Global variables
var n,start=-1,end=-1;
var isIncreasing = false;


function getResult(arr){
  initializeStuff(arr);

  return arr;
}


function find(num){
  
}

function initializeStuff(arr){
  n = arr.length;
  for(var i=0;i<n-2;i++){
    if((arr[i] < arr[i+1] && arr[i+1] > arr[i+2]) || (arr[i] > arr[i+1] && arr[i+1] < arr[i+2])){
      start = i+1;
      end = i;
    }
  }

if(start == -1 && end == -1){
  start=0;
  end = n;
}

  console.log(n,start,end);
}


console.log(getResult(arr));
