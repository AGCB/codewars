/*Write a function that returns the index of an input array where the sums of
  all entries earlier equal the same as the sum of all following entries

  Example...[1,2,3,4,3,2,1] should return 3.
          On the Left Side you have...
          input[0] + input[1] + input[2] = 6
              1    +    2     +    3     = 6
          And on the Right Side...
          input[4] + input[5] + input[6] = 6]
              3    +    2     +    1     = 6

          6 === 6 which is why we return 3
*/

function equalSidesToAnArray(arr) {
  let obj = {
    LST: 0,
    RST: 0,
  }

  function calcLeft(x) {
    for(let j = 0; j<x; j++) {
      obj.LST += arr[j];
    }
  }

  function calcRight(x) {
    for(let j = arr.length-1; j> x; j--) {
      obj.RST += arr[j];
    }
  }
  function resetTotals() {
    obj.RST = 0;
    obj.LST = 0;
  }

  ////////    STEPS TO COMPLETE     ////////
    //for every entry inside arr
    for(let i = 1; i<arr.length-1; i++) {
      resetTotals();
      calcLeft(i);
      calcRight(i);
      //compare LST and RST and if they are identical, return said index.
      if (obj.LST === obj.RST) {return i;}
    }
    //if you get through the entire loop and you haven't returned yet, return -1
    return -1;
}

console.log(equalSidesToAnArray([1,2,3,4,3,2,1])) //3
console.log(equalSidesToAnArray([100,2,25,25,25,25,0])) //1
console.log(equalSidesToAnArray([20,60,30,5,50,25,0])) //2
console.log(equalSidesToAnArray([10,20,1,2,2,2,3])) //1
