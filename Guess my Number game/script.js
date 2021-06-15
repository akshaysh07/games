"use strict";
const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
const inputNumber = document.querySelector(".guess");
const myNumber =document.querySelector(".number");
const message = document.querySelector(".message");

const ourScore = document.querySelector(".score");
const ourHighScore = document.querySelector(".highscore");

let score = 20;
let highscore = 0;


let secretNumber=Math.trunc(Math.random()*20)+1;


const displayMessage= function(msg){
   message.textContent=msg;
}

checkBtn.addEventListener('click', () => {
    const guess= Number( inputNumber.value);
      if (!guess) {
          displayMessage("⛔️ no number!");
      }else if(guess===secretNumber){
          displayMessage(" 👏correct no!");
          document.body.style.backgroundColor='#60b347'
          myNumber.style.width='30rem'

          if (score>highscore) {
              ourHighScore.textContent=score;
          }

      }else if(guess!==secretNumber){
         if (score>1) {
             displayMessage(guess>secretNumber ? 'Too high!' : 'Too low!')
             score--;
             ourScore.textContent=score;
         }else{
             displayMessage('💥 YOU LOST THE GAME!')
              ourScore.textContent=0;
            }
             
      }
});


againBtn.addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
  

    displayMessage('Start guessing...');
    ourScore.textContent = score;
    myNumber.textContent = '?';
    inputNumber.value = '';
  
    document.body.style.backgroundColor = '#222';
    myNumber.style.width = '15rem';
  });
  
