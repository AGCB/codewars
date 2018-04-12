function findOdd(A) {
  let out = {};

  A.forEach((elem, i)=> {
    if(!out[elem]) {out[elem] = 1;}
    else {
    out[elem]++;}
  });
  for(let key in out) {
    if(out[key] % 2 !== 0) {
      return key;
    }
  }
}
