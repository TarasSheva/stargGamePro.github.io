let character = document.getElementById('character_1');
let block = document.getElementById('block_1');
let modal = document.getElementById('modal');
let restart = document.getElementById('rest');
let back = document.getElementById('back');
let scoreTag = document.getElementById('score');
let score = 0;
let status = true;

restart.addEventListener('click', () => {
    location.reload();
});
back.addEventListener('click', () => {
    document.location.href = 'games.html';
});



function jumpDragon() {
    if (status) {
        if (character.classList != 'animate') {
            character.classList.add('animate');
        }
        setTimeout(function () {
            character.classList.remove('animate');
            score += 10;
        }, 500)
    }
}

setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = 'none';
        block.style.display = 'none';
        modal.style.display = 'block';
        scoreTag.innerHTML = `${score} point`;
        status = false;
    }
}, 10);