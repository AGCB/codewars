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
      output.push(elem.split('').reverse().join(''));
    }
    else {
      output.push(elem);

  }});

  return output.join(" ");
}
console.log(spinWords('Hey fellow warriors'));
