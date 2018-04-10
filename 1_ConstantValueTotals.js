function solve(s) {
  //first I build an object of letter number
  let alphabet = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  };

  let filtered = [];
  let letterTotals = [];

  s = s.split("");

  s.forEach((x) => {
    let counter = 0;
    if (x == 'a') {counter++;}
    if (x == 'e') {counter++;}
    if (x == 'i') {counter++;}
    if (x == 'o') {counter++;}
    if (x == 'u') {counter++;}
    //if each letter is not a vowel, push it into filtered[]
    if (counter === 0) {filtered.push(x);}
    //reset the counter for each letter x
    counter = 0;
  })

   filtered.forEach((x) => {
     letterTotals.push(alphabet[x]);
   });
   return letterTotals.reduce((a,b)=>{
     return a+b;
   },0);
  }
