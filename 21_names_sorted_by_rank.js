//Given an array of objects, 
//return an array of names sorted by their rank.

function namesSortedByRank(arr) {
  let sortedRanks = arr.map(x =>x.rank).sort((a,b)=>a-b);
  let result = [];
  sortedRanks.forEach((x,i) => {
    arr.forEach(y => {
      if(y.rank === x) {
        result.push(y.name)
      }
    })
  })
  return result
  }

var sampleArr = [
  {name:"bronson", rank:5},
  {name:"kurt", rank:18},
  {name:"marciano", rank:7},
  {name:"joey", rank:4},
  {name:"camille", rank:20},
  {name:"frazetta", rank:0}]

  console.log(namesSortedByRank(sampleArr))
