function accum(s) {
 let arrayOfLetters = s.split('');
 let arrayOfMumbles = [];

 let createMumble = () => {
   let mumblePush = '';

   arrayOfLetters.forEach((x,i) => {
       mumblePush += x.toUpperCase();
       for (let y = 1; y<= i; y++) {
       mumblePush += x.toLowerCase();
       }
       arrayOfMumbles.push(mumblePush);
       mumblePush = '';

   });

 };
 createMumble();

 return arrayOfMumbles.join('-');
}

/*
  there is always a slick one-liner for problems like this..
  return s.split('').map((c, i) => (c.toUpperCase() + c.toLowerCase().repeat(i))).join('-');
  we have a .repeat() that can be fed our i
  
*/
