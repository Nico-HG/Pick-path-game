let rlSync = require('readline-sync');

let bombGenerator = () => Math.ceil(Math.random()* 3);

let guess = () => {
  let yourGuess;
  do { yourGuess =  Number(rlSync.question('what is your guess from 1-3? \n')) 
 } while ( yourGuess !== 1 && yourGuess !== 2 && yourGuess !== 3 )
 return yourGuess;
}

const playgame = (gamecount = 0) => {
if( bombGenerator() === guess()) {
  console.log(`You lose this time pal. ${gamecount} rooms cleared`);
} else {

  console.log(`You made it clear through path`);
  gamecount += 1;
  playgame(gamecount);

} }