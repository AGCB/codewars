/*You live in the city of Cartesia where all roads are laid out in a perfect grid.
You arrived ten minutes too early to an appointment, so you decided to take the
opportunity to go for a short walk. The city provides its citizens with a
Walk Generating App on their phones -- everytime you press the button it sends
you an array of one-letter strings representing directions to walk
(eg. ['n', 's', 'w', 'e']). You know it takes you one minute to traverse one
city block, so create a function that will return true if the walk the app
gives you will take you exactly ten minutes (you don't want to be early or late!)
       and will, of course, return you to your starting point. Return false otherwise.
Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).
*/

function isValidWalk(walk) {

  //2 questions... Was the walk 10 minutes? Did we return home?
  //the first problem is a simple walk.length.
  //the second problem I decided on matching axis walks.
  //if occurences of south are the same as north, and likewise east for west,
  //then we know we have returned home.
  //so I create an object to hold my occurences of each direction.
  let obj = {
    "n":0,
    "s":0,
    "e":0,
    "w":0,
  };
  //then loop through each walk direction and increment our occurence object.
  walk.forEach((elem,i) => {
    obj[elem]++;
  });
  //check the matching directions..
  let leftsMatchRights = i => i['w'] === i['e'];
  let upsMatchDowns = i => i['n'] === i['s'];
  //then confirm 10minute walk.
  let isTenMinutes = i => walk.length === 10;

  //those 3 helper functions should all return true if we have a match
  return (leftsMatchRights(obj) && upsMatchDowns(obj) && isTenMinutes())
}

console.log(isValidWalk(['n', 's', 'e', 'w']))
console.log(isValidWalk(['n', 'n', 's', 's', 'e','e', 'w', 'w', 'n', 's']))
console.log(isValidWalk(['n', 'n', 's', 'e', 'e', 'w']))
console.log(isValidWalk(['n', 'n', 's', 's', 'e','e', 'w', 'e', 'n', 's']))
