#include <stdio.h>
#include <string.h>
#include <math.h>
#include <stdlib.h>

int main() {

    /* Enter your code here. Read input from STDIN. Print output to STDOUT */
    long n = 0,num=0;
    scanf("%ld",&n);
    for(long i=0;i<n;i++){
        scanf("%d\n",&num );
        //printf("%d",result(num));
    }
    
    return 0;
}

long result(long num){
  long tmp=0,max = 0;
  for(int i=999;i>100;i--){
    for(int j=999;j>100;j--){
       tmp = i*j;
      if((tmp<n) && isPalindrome(tmp)){
        if(tmp > max){max = tmp;}
      }
    }
  }

  return max;

}

boolean isPalindrome(long num){
  // console.log(num);
   char str[10];
   sprintf(str,"%ld",num);
   int num = strlen(str);
   if(num == num.split("").reverse().join("")){return true;}
   else return false;
}
