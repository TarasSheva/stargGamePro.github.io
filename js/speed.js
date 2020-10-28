let block = document.getElementById('block_3');
let character = document.getElementById('character_3');
let modal = document.getElementById('modal');
let restart = document.getElementById('rest');
let back = document.getElementById('back');
let score = 0;


let left = parseInt(window.getComputedStyle(character).getPropertyValue('left'));
function moveLeft() {
    left -= 100;
    if (left >= 0) {
        character.style.left = left + 'px';
    }
}

function moveRight() {
    // let left = parseInt(window.getComputedStyle(character).getPropertyValue('left'));
    left += 100;
    if (left < 300) {
        character.style.left = left + 'px';
    }
}

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') {moveLeft()}
    if (event.key === 'ArrowRight') {moveRight()}
});

block.addEventListener('animationiteration', () => {
    let random = Math.floor(Math.random()*3);
    left = random * 100;
    block.style.left = left + 'px';
    score++;
});

setInterval(() =>{
    let characterLeft = parseInt(window.getComputedStyle(character).getPropertyValue('left'));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    let blockTop = parseInt(window.getComputedStyle(block).getPropertyValue('top'));
    if (characterLeft == blockLeft && blockTop < 500 && blockTop > 300) {
        block.style.display = 'none';
        modal.style.display = 'block';
    }
}, 1);

restart.addEventListener('click', () => {
    location.reload();
});
back.addEventListener('click', () => {
    document.location.href = 'index.html';
});

document.getElementById('left').addEventListener('touchstart', moveLeft);
document.getElementById('right').addEventListener('touchstart', moveRight);