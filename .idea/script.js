'use strict';

/************************My Dom Var***************************/
//Buttons
const newGameBtn = document.querySelector(".btn--new");
const rollBtn = document.querySelector(".btn--roll");
const holdBtn = document.querySelector(".btn--hold");
//player 1
const player1EL= document.querySelector('.player--0')

let totalScoreP1EL = document.querySelector("#score--0");
let currentScoreP1EL = document.querySelector("#current--0");
//player 2
const player2EL= document.querySelector('.player--1')
let totalScoreP2EL = document.querySelector("#score--1");
let currentScoreP2EL = document.querySelector("#current--1");


//the dice
const diceEL = document.querySelector(".dice");

//the array
let arrayTotal=[0,0];
 /***********************Starting condoitions****************************/
let playing = true;
totalScoreP1EL.textContent = 0;
totalScoreP2EL.textContent = 0;
let currentScore = 0;
diceEL.classList.add('hidden');
let nowPlay = 0;


/*********************My methods******************************/
function switchPlayer(){

    currentScore = 0;
    document.getElementById(`current--${nowPlay}`).textContent = 0;
    nowPlay = nowPlay===0? 1: 0;
    player2EL.classList.toggle('player--active');
    player1EL.classList.toggle('player--active');

}



/*********************My exe******************************/
//roll Button
 rollBtn.addEventListener('click',()=> {
     if (playing) {
//1. generating a number
          const dice = Math.trunc(Math.random() * 6 + 1);
          //2.display dice
         diceEL.classList.remove('hidden');
         diceEL.src = `dice-${dice}.png`
         //3. check for 1. if true switch player
         if (dice !== 1) {
             //add the dice to the curren score
             currentScore += dice;
             document.getElementById(`current--${nowPlay}`).textContent = currentScore;
             console.log(currentScoreP1EL);
             // if (player1.classList.contains('player--active')) {

             //  }
         } else {
             switchPlayer();
         }
     }

});

 holdBtn.addEventListener('click',()=>{
     if (playing){

         console.log(arrayTotal)

         //add current player score
     arrayTotal[nowPlay] += currentScore;
     document.querySelector( `#score--${nowPlay}`).textContent = arrayTotal[nowPlay];
    //verify if its above or equal 100
     if(arrayTotal[nowPlay]>=20) {
         rollBtn.disabled = true;
         holdBtn.disabled = true;
         diceEL.classList.toggle('hidden');

         playing = false;
         document.querySelector(`.player--${nowPlay}`).classList.remove('player--active');

         document.querySelector(`.player--${nowPlay}`).classList.add('player--winner');
       } else {
         switchPlayer();
     }
     }





 });

newGameBtn.addEventListener('click', ()=> {
    currentScore = 0;
    console.log(arrayTotal);
    arrayTotal.splice(0,2);
    console.log(arrayTotal);
    playing = true;
    rollBtn.disabled = false;
    holdBtn.disabled = false;
    diceEL.classList.remove('hidden');
    totalScoreP2EL.textContent = 0;
    totalScoreP1EL.textContent = 0;
    currentScoreP2EL.textContent = 0;
    currentScoreP1EL.textContent = 0;
    document.querySelector(`.player--${nowPlay}`).classList.remove('player--winner');
    player1EL.classList.toggle('player--active')





})



