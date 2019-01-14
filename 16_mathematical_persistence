/* 
https://www.codewars.com/kata/persistent-bugger
https://en.wikipedia.org/wiki/Persistence_of_a_number
In this case, write a func that calculates multiplicative persistence with a base10 number as input. 
*/

function persistence(num) {
  let counter = 0
  let __splitNumbers = input => {
    return String(input).split("").map(x =>Number(x))
  }
  let temp = __splitNumbers(num)

  while(temp.length >1) {
    let reduction = temp.reduce((a,b) => {
      return a*b
    })
    temp = __splitNumbers(reduction)
    counter++
  }
  return counter

}

/*
console.log('we expect..', persistence(39), 'to equal', 3);
console.log('we expect..', persistence(4), 'to equal', 0);
console.log('we expect..', persistence(25), 'to equal', 2);
console.log('we expect..', persistence(999), 'to equal', 4);
*/
