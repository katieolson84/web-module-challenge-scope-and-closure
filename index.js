// ⭐️ Example Challenge START ⭐️

/**
 * ### Challenge `processFirstItem`
 * 
 * @instructions
 * Implement a higher-order function called `processFirstItem`.
 * It takes two arguments:
 * @param stringList an array of strings.
 * @param callback function that takes a string as its argument.
 * @returns the result of invoking `callback` with the FIRST element in `stringList`.
 * 
 * Example of usage of this higher-order function:
 * Invoking `processFirstItem` passing `['foo', 'bar']` and `(str) => str + str`,
 * should return 'foofoo'.
*/
function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/* Task 1: `counterMaker`
 * Study the code for counter1 and counter2. Answer the questions below.
 * 
 * 1. What is the difference between counter1 and counter2?
 * 
 * Counter1 has the count within the function and counter2 has the count in the global space.
 * 
 * 2. Which of the two uses a closure? How can you tell?
 * 
 * Counter 2 has the information it needs to complete the function, outside in the global space, for it to close. function one can only work within its function.
 * 
 * 3. In what scenario would the counter1 code be preferable? In what scenario would counter2 be better? 
 *
 * If you want to protect the count and not access it later you can use the counter1 option. If you want to be able to access the count later on, then the counter2 would work best. 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* Task 2: inning() 

Write a function called `inning` that returns a random number of points that a team scored in an inning. This should be a whole number between 0 and 2. */

function inning(){
  let score = Math.floor(Math.random()*3)
  return score;
}    
console.log(inning());  

/* Task 3: finalScore()

Write a higher order function called `finalScore` that accepts the callback function `inning` (from above) and a number of innings and and returns the final score of the game in the form of an object.

For example, 

finalScore(inning, 9) might return: 
{
  "Home": 11,
  "Away": 5,
}

*/ 

function finalScore(callback, num){
  let home = 0;
  let away = 0;
  for(let i = 0; i < num; i++){
    home += callback();
    away += callback();  
  }
    return `Home: ${home} Away: ${away}`;
}
console.log(finalScore(inning, 9));

/* Task 4: 

Create a function called `scoreboard` that accepts the following parameters: 

(1) Callback function `getInningScore`
(2) Callback function `inning`
(3) A number of innings

and returns the score at each pont in the game, like so:
1st inning: awayTeam - homeTeam
2nd inning: awayTeam - homeTeam
3rd inning: awayTeam - homeTeam
4th inning: awayTeam - homeTeam
5th inning: awayTeam - homeTeam
6th inning: awayTeam - homeTeam
7th inning: awayTeam - homeTeam
8th inning: awayTeam - homeTeam
9th inning: awayTeam - homeTeam
Final Score: awayTeam - homeTeam */


function getInningScore(cb, num){
  let score = [];
  for(let i = 0; i < num; i++){
    score.push({home: cb(), away: cb()});
  }
  return score;
}
function scoreBoard(cb1, callback, num){
  let score = cb1(callback, num);
  console.log(score);
  let home = 0;
  let away = 0;
  for(let i = 0; i < num; i ++){
    home += score[i].home;
    away += score[i].away;
    console.log(`Inning: ${i+1}: ${score[i].home} - ${score[i].away}`);
  }
 console.log(`Final Score: ${home} - ${away}`); 
}

scoreBoard(getInningScore,inning, 9);