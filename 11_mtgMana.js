// Magic The Gathering is a collectible card game that features wizards battling against each other with spells and creature summons. The game itself can be quite complicated to learn. In this series of katas, we'll be solving some of the situations that arise during gameplay. You won't need any prior knowledge of the game to solve these contrived problems, as I will provide you with enough information.
//
// In Magic, each spell you cast has a cost associated with it. Those costs are represented like so:
//
// "B" -> One black mana
// "G" -> One green mana
// "R" -> One red mana
// "U" -> One blue mana
// "W" -> One white mana
// "1" -> One colorless mana
// "2" -> Two colorless mana
// "3BBG" -> Three colorless mana, two black mana, one green mana
//
// Your mana pool will be one string that contains all of your available mana like so:
//
// "10WWWRRRRR" -> Means you have 10 colorless mana, 3 white mana and 5 red mana to work with.
//
// The caveat is, any left over colored mana, can be used as colorless mana. So if you have a spell that costs "1B" and your mana pool has "UB" you can cast that spell, since the "U" can be used as a colorless mana.
//
// With this knowlege, write a function canCast() that takes in a string for your mana pool and then any number of spells' casting costs. Return true if you have enough mana to cast the spell, false otherwise.
//
// Examples:
//
// canCast("BBRR","BR") -> true
// canCast("BBRR","BR","BR") -> true
// canCast("4R","3R") -> true
// canCast("2", "R") -> false
// canCast("RR", "2") -> true
//
// canCast("BBRR","BR") # true
// canCast("BBRR","BR","BR") # true
// canCast("4R","3R") # true
// canCast("2", "R") # false
// canCast("RR", "2") # true

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

// ways to improve...
// set it up to take in n arguments that are all aggregated into 1 large casting cost
//objMaker needs to be more DRY. 
