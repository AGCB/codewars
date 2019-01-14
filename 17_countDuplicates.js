/*
counting duplicates.
https://www.codewars.com/kata/counting-duplicates

Write a function that will return the count of distinct
case-insensitive alphabetic characters and numeric digits
that occur more than once in the input string.

 The input string can be assumed to contain only
 alphabets (both uppercase and lowercase) and numeric digits.

 */

const countDups = (input) => {
  let temp = {}
  let total = 0
  input.toLowerCase().split("").forEach(x => {
    if(!temp[x]) {
      temp[x] = 1
    }
    else {
      temp[x]++
    }
    console.log('current temp', temp)
  })
  Object.keys(temp).forEach(x => {
    if (temp[x] > 1) {total++}
  })
  return total
}


// console.log(
//   countDups("abCde"), countDups("aAabBcde")
// )

// the above expect 0 and 2 as returns
