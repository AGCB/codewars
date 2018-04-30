/*
  Write a function that takes in an array of integers, a representation of
  sequential stock prices during a single trading session, and returns the
  largest gain possible if one were to buy and sell at just the right time.
  for example...
  [1,2,3,4,5] returns 4, since you could have purchased at 1 and sold at 5.
  [1,2,1,3,5] returns 4 as well,
  In my circles, we call this problem AppleStocks()...
*/
function appleStocks(arr) {
  let min = Infinity;
  let max = -Infinity;
  arr.forEach((elem,i)=> {
    //look for an updated minimum value
    if (elem < min) {
      min = elem;
    }
    //look for an updated maximum profit
    if (arr[i+1]-min > max) {
      max = arr[i+1]-min;
    }
  })
  return max;
}

console.log('[1,2,3,4,5] will return--',appleStocks([1,2,3,4,5])) //4
console.log('[5,4,3,2,1] will return--',appleStocks([5,4,3,2,1])) //-1
console.log('[1,2,3,2,1] will return--',appleStocks([1,2,3,2,1])) //2
console.log('[1,2,1,2,2] will return--',appleStocks([1,2,1,2,2])) //1
console.log('[2,3,1,3,5] will return--',appleStocks([2,3,1,3,5])) //4
console.log('[1,2,3,1,2] will return--',appleStocks([1,2,3,1,2,2])) //2
