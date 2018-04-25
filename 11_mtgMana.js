function canCast(mana, cost) {
  /*
    The first object is for the mana pool
    The second is for the cost.
  */
  let obj1 = {
    B:0,
    G:0,
    R:0,
    U:0,
    W:0,
    extra: 0,
    accum: 0
  };
  let obj2 = {
    B:0,
    G:0,
    R:0,
    U:0,
    W:0,
    extra: 0,
    accum: 0,
  };

  let obj3 = {
    B:false,
    G:false,
    R:false,
    U:false,
    W:false,
    extra: false,
  };

/*
  This function iterates through every letter and increments the according
  key.
*/
  function objMaker(str, obj) {
    str.split('').forEach((elem) => {
      if (elem === 1) {obj.extra++;
                       obj.accum++;}
      else if (elem == 2) {obj.extra+=2;
                           obj.accum+=2;}
      else if (elem == 3) {obj.extra+=3;
                           obj.accum+=3;}
      else if (elem == 4) {obj.extra+=4;
                           obj.accum+=4;}
      else if (elem == 5) {obj.extra+=5;
                           obj.accum+=5;}
      else if (elem == 6) {obj.extra+=6;
                           obj.accum+=6;}
      else if (elem == 7) {obj.extra+=7;
                           obj.accum+=7;}
      else if (elem == 8) {obj.extra+=8;
                           obj.accum+=8;}
      else if (elem == 9) {obj.extra+=9;
                           obj.accum+=9;}
      else {
      obj[elem]++;
      obj.accum++;
      }
    });
  }
  objMaker(mana,obj1);
  objMaker(cost, obj2);


function manaChecker(letter) {
  if (letter === "extra") {
    if (obj2[letter] === 0) {
      obj3[letter] = true;
    }
    else {
      if (obj1.accum >= obj2[letter]) {
        obj3[letter] = true;
      }
    }
  }
  if (obj2[letter] === 0) {
    obj3[letter] = true;
  }
  else if (obj1[letter] >= obj2[letter]) {
    obj1[letter]--;
    obj1.accum --;
    obj3[letter] = true;
  }
}
manaChecker("B")
manaChecker("G")
manaChecker("R")
manaChecker("U")
manaChecker("W")
manaChecker("extra")

// after running manaChecker, we have our obj3 giving us what we need to know.


//If obj3 has any 'false' values, then we fail.
return ((Object.values(obj3)).filter(elem => elem == false).length=== 0);
}

console.log(canCast("BBRR","BR")) //true
console.log(canCast("BGRUW", "4WW"))
