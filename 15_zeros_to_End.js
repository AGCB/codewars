/*
  Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
*/

/* 
  example...
  moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/
const moveZeros = arr => {
  let zeroCount = 0;
  let answer = [];
  arr.forEach(x => {
    x === 0 ? zeroCount++ : answer.push(x);
  })
  for(let i = 0; i<zeroCount; i++) {
    answer.push(0);
  }
     return answer;
}


