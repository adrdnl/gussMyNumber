'use strict';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.message').textContent = 'New Content to Be';

// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;

// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value;

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore = 0;


document.querySelector('.check').addEventListener('click', function() {
 const guess = Number(document.querySelector('.guess').value);
 console.log(typeof guess);

//  When there is no input
if (!guess) {
    document.querySelector('.message').textContent = 'No number selected';

    // When player wins
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = "Correct Number!";
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;

        if(score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }

      //When guess is to high.  
    } else if (guess > secretNumber) {
        
        if (score >= 1) {
            document.querySelector('.message').textContent = 'Too high';
            document.querySelector('.score').textContent = score;
            score--;
        } else {
           document.querySelector('.message').textContent = "You lost the game!";
           document.querySelector('.score').textContent = 0; 
        }
    
    //When guess is to low.    
    } else if(guess < secretNumber) {
        document.querySelector('.message').textContent = 'This number is lower than secret number';
        score = score -1;
        document.querySelector('.score').textContent = score;
    }
});



document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random()*20 +1);
    document.querySelector('.message').textContent = 'Start guessing.';
    document.querySelector('.score').textContent = score;
    document.querySelector('.guess').value = '';
    document.querySelector('.number').textContent = '?';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});