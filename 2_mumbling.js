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
