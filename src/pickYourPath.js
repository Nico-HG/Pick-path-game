

let rlSync = require('readline-sync');
let gameDifficulty;
let gameSize = 6
do { gameDifficulty = Number(rlSync.question('Pick your path wanderer. (Type 1, 2 or 3) \nFORGIVING (1) \nREALISTIC (2) \nCHALLENGING (3)\n'))
} while(gameDifficulty !== 1 && gameDifficulty !== 2 && gameDifficulty !== 3 )

const setGameDifficulty = (gameDifficulty, gameSize) => {
  let gameDifficultyComp;
  switch(gameDifficulty) {
    case 1: gameDifficultyComp = 1/8
      break;
    case 2: gameDifficultyComp = 1/3
      break;
    case 3: gameDifficultyComp = 1/2
      break;
    default: gameDifficultyComp = 1/3
}
return Math.ceil(gameSize * gameDifficultyComp);
}
gameDifficulty = setGameDifficulty(gameDifficulty, gameSize);

let bombGenerator = (num) => Math.floor(Math.random()* num);

//The size of the game can be changed easier for further development..
let gameOptionPaths = [];
const gamePaths = size => {
  for (let i = size; i > 0; i -= 1) {
    gameOptionPaths.push(i) 
  }
}
gamePaths(gameSize);

let trapPaths = [];
const generateGameTraps = level =>  {
  let trap;
  for( let i = 0; i < level; i += 1 ) {
    do {trap = bombGenerator(gameSize)
    }  while (trapPaths.includes(trap))
    trapPaths.push(trap)
  }
}
const trapClear = () => trapPaths = [];

const playerPath = () => {
    let chosenPath;
     do { chosenPath =  Number(rlSync.question(`...${gameSize} doors ahead...${gameDifficulty} of them traps...No going back.\n        Type from 1-${gameSize} to pick your path.      \n`)) 
    } while ( !gameOptionPaths.includes(chosenPath)  )
    return chosenPath;
}
const playgame = (difficulty, levelsCleared = 0) => {
  generateGameTraps(difficulty);
  if (trapPaths.includes(playerPath())) {
    console.log(`${levelsCleared} rooms in, you hit a trap.\nDoes it ever end?`);
        } else {
          trapClear();
          levelsCleared += 1;
          console.log(`--------${levelsCleared} Rooms cleared. BUT ANOTHER AWAITS---------\n`)
          playgame(difficulty, levelsCleared);
        } 
}
playgame(gameDifficulty);




//create infinite mode where difficulty goes + 1 every time? (after a cetain number of rooms are cleared - logs something new to ramp up)?? mid idea

//scale difficulty with gamesize
/* 
bombamount/bombamount = easy ------ only one room is a bomb(maybe add a plus feature tied to the room amount to not make it too easy)
bombamount/3 (or closest divisble to get a third) = normal --- a third of the rooms are bombs
bombamount(bombgeneratorrightnow)/ 2 == hard -----hal;f rooms are bombs
*/

//create objects for the diffent elements instead so you can use methods? traps.clear()/// traps.set()


