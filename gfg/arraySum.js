// Problem from Geeks for Geeks
// http://www.geeksforgeeks.org/write-a-c-program-that-given-a-set-a-of-n-numbers-and-another-number-x-determines-whether-or-not-there-exist-two-elements-in-s-whose-sum-is-exactly-x/

var arr = [2,3,0,1,-1,2,8,4,5];
//arr=[1,0,1];
var num = 1;


//O(nlogn) method
function getResult(arr,num){
  arr = arr.sort();
  var result = [];
  var start=0,count=0;
  var end = arr.length-1;
  while(start<end){
    console.log(start,end);
    if(arr[start]+arr[end]== num){
      result.push([arr[start],arr[end]]);
      start++;

    }
    else if(arr[start]+arr[end]<num) {
      start++;
    }
    else{ end --;}
  }
  return result;
}

//O(n) method using Hash Map
function getResultHashMap(arr,sum){
  var map = new Map();
  var result = [];
  arr.map(function(key){
    if(map.has(key)){
      map.set(key,map.get(key)+1);
    }
    else map.set(key,1);
  });

  arr.map(function(key){
    if(map.has(sum-key)){
      result.push([key,sum-key]);
    }
  })

  return(result);
}

console.log(getResultHashMap(arr,num));
