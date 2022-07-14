'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  // document.querySelector('.message').textContent = message;
  $('.message').text(message);
};

// document.querySelector('.check').addEventListener('click', function () {
$('.check').click(function () {
  // let guess = Number(document.querySelector('.guess').value);
  let guess = Number($('.guess').val());

  if (!guess) {
    displayMessage('No Number');
  } else if (guess === secretNumber) {
    displayMessage('Correct Number');
    // document.querySelector('body').style.backgroundColor = '#60b347';
    $('body').css('background-color', '#60b347');
    // document.querySelector('.number').textContent = secretNumber;
    $('.number').text(secretNumber);
    // document.querySelector('.number').style.width = '30rem';
    $('.number').css('width', '30rem');

    if (score > highscore) {
      highscore = score;
      // document.querySelector('.highscore').textContent = highscore;
      $('.highscore').text(highscore);
    }
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? 'Too High' : 'Too Low';
      displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');
      score--;
      // document.querySelector('.score').textContent = score;
      $('.score').text(score);
    } else {
      displayMessage('You have lost');
      // document.querySelector('.score').textContent = 0;
      $('.score').text(0);
    }
    //   } else if (guess > secretNumber) {
    //     if (score > 1) {
    //       document.querySelector('.message').textContent = 'Too High';
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.message').textContent = 'You have lost the game';
    //       document.querySelector('.score').textContent = 0;
    //     }
    //   } else if (guess < secretNumber) {
    //     if (score > 1) {
    //       document.querySelector('.message').textContent = 'Too Low';
    //       score--;
    //       document.querySelector('.score').textContent = score;
    //     } else {
    //       document.querySelector('.message').textContent = 'You have lost the game';
    //       document.querySelector('.score').textContent = 0;
    //     }
  }
});

// document.querySelector('.again').addEventListener('click', function () {
$('.again').click(function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.message').textContent = 'Start Guessing...';
  $('.message').text('Start Guessing');
  // document.querySelector('body').style.backgroundColor = '#222';
  $('body').css('background-color', '#222');
  // document.querySelector('.number').textContent = secretNumber;
  $('.number').text(secretNumber);
  // document.querySelector('.number').style.width = '15rem';
  $('.number').css('width', '15rem');
  // document.querySelector('.score').textContent = score;
  $('.score').text(score);
  // document.querySelector('.number').textContent = '?';
  $('.number').text('?');
  // document.querySelector('.guess').value = '';
  $('.guess').val('');
});
