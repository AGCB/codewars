//A digital root is the recursive sum of all the digits in a number. 
//Given n, take the sum of the digits of n. 
//If that value has two digits, continue reducing in this way until a single-digit number is produced. 
//This is only applicable to the natural numbers.
//
//Here's how it works:

function digital_root(n) {
  if(n===0){return 0};
  // initialize values
  let num = n;
  let arr = String(num).split("");
  
  while(arr.length>1) {
    num = arr.reduce((a,b)=>Number(a)+Number(b));
    arr = String(num).split("");
  }
  
  return num; 
}
