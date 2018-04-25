function arrayDiff(arr1, arr2) {
  return arr1.filter(x=> {
    return !arr2.includes(x);
  })
}

console.log(arrayDiff([1,2], [1])) //should return [2]
console.log(arrayDiff([1,2,2,2,3], [2])) //should return [1,3]
