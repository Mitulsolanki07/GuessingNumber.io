'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let HighScore = 0;

const DisplayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //when there is no input
  if (!guess) {
    DisplayMessage('⛔️ No number!');
  }
  //when player wins
  else if (guess === secretNumber) {
    DisplayMessage('🎉 Correct Number!');
    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > HighScore) {
      HighScore = score;
      document.querySelector('.highscore').textContent = HighScore;
    }
  }
  //this for too high or too low
  else if (guess !== secretNumber) {
    if (score > 1) {
      DisplayMessage(guess > secretNumber ? '📈 Too high!' : ' 📉 Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      DisplayMessage('💥 You lost the game!');
      document.querySelector('.score').textContent = 0;
    }
  }
});
//event listener for again button
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  DisplayMessage('start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
