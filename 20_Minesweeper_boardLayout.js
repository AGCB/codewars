/* 
  I interviewed recently at a very cool startup in San Fran. 
  I had 2.5 hours to code MineSweeper.
  https://en.wikipedia.org/wiki/Minesweeper_(video_game)
  http://minesweeperonline.com/#
  
  Here is the data structure of the board.
  Here are a few questions to ask about a square that the below algo will answer...
  - is this square a bomb? 
  - how many adjacent squares have bombs? 
  - what are the x/y coordinates of this square 
  All answered below....
*/


let board = [];

// think of the board as a 2D array of Objects.
// Array(whole board) of Arrays(rows) of Objects(squares)
// x and y aren't just placeholder names. Think of them as X/Y coordinates.

// randomized bools for isBomb is easy to modify with the rightHandSide operand. 
// example... .2 is 20% chance of being bomb

for(let x = 0; x<=4; x++) {
  board.push([])
  for(let y = 0; y<=4; y++) {
    board[x].push(
      {
        x: x,
        y: y,
        isBomb: Math.random() < .2,
        adjBomb: 0
      }
    ) 
  }
}
//at this stage we have our board and bombs but we are missing the adjacentBombs values.

const checkForBombs = (x,y) => {
  let localNumber = 0;
  // we will return our localNumber after we have run it against all 8 touching neighbors.
  const checkNeighbors = (a,b) => {
    if(board[a] && board[a][b] && board[a][b].isBomb) {
      localNumber++;
    }
  }
  //our function runs 8 times for the 8 places
  checkNeighbors(x-1,y);// directly above
  checkNeighbors(x-1,y+1);// upper right
  checkNeighbors(x, y+1);// to the right
  checkNeighbors(x+1, y+1); //lower right
  checkNeighbors(x+1, y);// directly below
  checkNeighbors(x+1, y-1);// lower left
  checkNeighbors(x, y-1);//to the left
  checkNeighbors(x-1, y-1);// upper left
  return localNumber;
}

for(let x = 0; x<=4; x++) {
  for(let y = 0; y<=4; y++) {
    board[x][y].adjBomb = checkForBombs(x,y)
  }
}

//we don't need the adjBomb number if isBomb is truthy
for(let x = 0; x<=4; x++) {
  for(let y = 0; y<=4; y++) {
    if(board[x][y].isBomb) {
      delete board[x][y].adjBomb 
    }
  }
}

console.log(
  board
)
