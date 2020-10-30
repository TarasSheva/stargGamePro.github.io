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

let forGame = document.querySelector('.forty_game');
const toTower = () => {
    document.location.href = 'tower.html';
};
forGame.addEventListener('click', toTower);