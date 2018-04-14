//Given a number, return a string with dash'-'marks before and after each odd
//integer, but do not begin or end the string with a dash mark.
function dashatize(input) {
  //first a little sanitization shall we?
  if (isNaN(input)) {return String(NaN);}
  //now...
  //turn number to array of individual integers
  let arr = ('' + input).split('').map(digit => +digit);
  let rebuild = [];
  let final = '';
  //lets get rid of any starting dashes (if argument is a negative number for instance...)
  if (isNaN(arr[0])) {
    arr.splice(0,1);}

  //then loop through every element
  arr.forEach((elem,i)=>{
    //if the element is odd && the previous element is not a dash...
    if (elem % 2 !== 0) {
        rebuild.push('-');
      //then insert the element
      rebuild.push(elem);
      //then insert the one dash after
      rebuild.push('-');
    }
    else {rebuild.push(elem);}

  });

  //clean off any starting or ending dash mark
  if (rebuild[0] === '-') {rebuild.shift();}
  if (rebuild[rebuild.length-1] === '-') {rebuild.pop();}
  //then remove duplicates
  rebuild.forEach((elem,i) => {
    if (elem === rebuild[i+1] && elem === '-') {
      rebuild.splice(i,1);
    }
  });

  //build a string of all of the elements concated together.
  rebuild.forEach((elem)=>{
    final += elem;
  })
  return final;
}
