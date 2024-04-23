// For the first image
let randomNumber1 = Math.floor(Math.random() * 6 + 1);
let randomDiceImage = 'dice' + randomNumber1 + '.png';
let randomImageSource = 'images/' + randomDiceImage;
// For the second image
let randomNumber2 = Math.floor(Math.random() * 6 + 1);
let randomDiceImage2 = 'dice' + randomNumber2 + '.png';
let randomImageSource2 = 'images/' + randomDiceImage2;

const img1 = document.querySelector('img');
const img2 = document.querySelectorAll('img')[1];
const winner = document.querySelector('h1');

img1.setAttribute('src', randomImageSource);
img2.setAttribute('src', randomImageSource2);

if (randomNumber1 > randomNumber2)
winner.innerHTML = "Player 1 wins!🚩";
else if (randomNumber2 > randomNumber1)
winner.innerHTML = "Player 2 wins!🚩";
else
    winner.innerHTML = "Draw!";