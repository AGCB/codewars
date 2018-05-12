function amidakuji(arr) {
  let output = [];
  let spot = 0;
  let j = 0;
  function insert(num) {
    spot = num;
    arr.forEach((str,i) => {
      if(str[spot-1] == "1") {
        spot--;
      }
      else if(str[spot] == "1") {
        spot++;
      }
    })
    output[spot] = num;
  }

  for(j = 0; j<7; j++) {
    insert(j);
  }
  return ('output',output);
}






//should return [4,2,0,5,3,6,1]
console.log(amidakuji(['001001', '010000', '100100',
                       '001000', '100101', '010010',
                       '101001', '010100']));
