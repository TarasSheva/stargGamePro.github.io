let input = document.querySelector('input');
let btn = document.querySelector('.btn_start');
let startPage = document.querySelector('.question');
let ansText = document.querySelector('.ans_text');
let selecGame = document.querySelector('.games_list');

const Start = () => {
    let answer = +input.value;
    if (answer !== 42) {
        ansText.innerHTML = 'The answer is not correct :( Try again!';
        ansText.style.color = 'red';
    } else if (answer === 42) {
        startPage.style.display = 'none';
        selecGame.style.display = 'block';
    }
};

btn.onclick = Start;

let firGame = document.querySelector('.first_game');

const toDragon = () => {
    document.location.href = 'dragon.html';
};
firGame.addEventListener('click', toDragon);

let secGame = document.querySelector('.second_game');

const toBounce = () => {
    document.location.href = 'flappy.html';
};
secGame.addEventListener('click', toBounce);

let thiGame = document.querySelector('.third_game');

const toSpeed = () => {
    document.location.href = 'speed.html';
};
thiGame.addEventListener('click', toSpeed);