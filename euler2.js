function processData(input){
  var n = input[0];
  for(var i = 1; i<=n;i++){
    console.log(fibo(input[i]));
  }

}

function fibo(n){
  var first=1,second=2,sum=0,tmp;
  while(second<n){
    if(second%2 == 0){sum+= second};
    tmp = second;
    second = first + second;
    first = tmp;

  }

  return sum;
}

processData([2,10,100]);
