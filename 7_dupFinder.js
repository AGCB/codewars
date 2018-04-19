
//Algo question
/* write a function...
 input is an array of integers
  output is an array of all duplicated values
*/
/*My answer involved saving an object
  key is Element: value is a counter starting at 1.

After I wrote the arr.forEach(), I realized that I didn't need
to actually increment the counter. As soon as I reached that
else block, I could write the element to a new array, and return it.

*/
function dupFinder(arr) {
  let output = [];
  let obj = {};
  arr.forEach((elem,i) => {
    (!obj[elem]) ? obj[elem] = 1 : output.push(elem) ;
    });
  return output;
}

console.log(dupFinder([3,4,3,2,5,1,8,4]))  // --> returns [3,4]

/*I mentioned the time complexity of going through the forEach() as constant
also the nested forLoop nSquared way.

I also forgot to address the situation of multiple duplicates.
for example, if there were 3 instances of an identical integer, then this
solution would have the integer listed twice in our output.

I like that I have it down to linear time, but I'm making an object in memory.
Surely there is a more clever way to do it without creating anything else in
memory while still only going through once.
..to be continued.
*/
