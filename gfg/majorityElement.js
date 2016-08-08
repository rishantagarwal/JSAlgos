// http://www.geeksforgeeks.org/majority-element/

var arr =  [3,3,4,2,4,4,2,4,4];

//O(nlogn approach)
function majorityElement(arr){
   arr = arr.sort();
   var n = (arr.length);
   var count = 0;

   arr.map(function(index){
     if(index == arr[Math.floor(n/2)]){count++;}
   });

   if(count > Math.floor(n/2)){return arr[Math.floor(n/2)];}
   else return false;
}

//O(n approach)
function majorityElementHashMap(arr){
  var map = new Map();
  for(var key of arr){
    if(map.has(key)){
      var count = map.get(key);
      map.set(key,count+1);

      if(count+1 > Math.floor(arr.length/2)){ return key;}
    }
    else map.set(key,1);
  };
  

  return false;
}


console.time("NlogN");
console.log(majorityElement(arr));
console.timeEnd("NlogN");

console.time("N");
console.log(majorityElementHashMap(arr));
console.timeEnd("N");
