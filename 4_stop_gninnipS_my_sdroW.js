/*
  spinWords() is function that takes in a string of 1 or more words.
  Twist-- any 5+letter word gets printed in reverse
*/
let spinWords = (str) => {
  //we need the str to be split into an array.
  str = str.split(' ');
  //output will be our place that we put all final individual words
  let output = [];

  str.forEach((elem,i)=>{
    if(elem.length >4) {
      let reversed = [];
      for(let i = elem.length-1; i>=0; i--) {
        // console.log('this',elem, elem[i]);
        reversed.push(elem[i]);
      }
      output.push(reversed.join(''));
      reversed = [];
    }
    else {
      output.push(elem);

  }});

  return output.join(" ");
}
console.log(spinWords('Hey fellow warriors'));
