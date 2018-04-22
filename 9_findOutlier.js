// You are given an array (which will have a length of at least 3, but could be very large)
// containing integers. The array is either entirely comprised of odd integers or
// entirely comprised of even integers except for a single integer N.
// Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(arr){
let obj = {
    evens: 0,
    odds: 0,
  };
  /*
   We need to know if arr is full of evens with 1 odd value, or vice versa.
   I should be able to tell that through our obj{} as soon as we have gone through

  */
  for(let i = 0; i<=3; i++) {
    if (arr[i] % 2 === 0) {
      obj.evens++;
    }
  }

  if (obj.evens >1) {
    arr = arr.filter(x => {
      return x % 2 !== 0;
    })
    return Number(arr[0])
  }
  else {
    arr = arr.filter(x=>{
      return x % 2 === 0;
    })
    return Number(arr[0]);
  }
}

// Should return: 11 (the only odd number)
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]))

// Should return: 160 (the only even number)
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]))


/* This was the first time that I wasn't impressed by "best practices" solutions
on codewars... The most popular solution involved making 2 new arrays, odd and even
and filling them with a modulo filter.
that's O(2n). It was easier to read, yes... but my solution is linear, since I'm only
iterating through the entire input arr once.
then there is the object I'm making which only takes 2 keys and 3 total value inserts.
I'd like to know a clever math way that doesn't need to create an obj{} at all..
surely one exists.. to be continued...

*/
