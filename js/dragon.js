let character = document.getElementById('character_1');
let block = document.getElementById('block_1');

function jumpDragon() {
    if (character.classList != 'animate') {
        character.classList.add('animate');
    }
    setTimeout(function () {
        character.classList.remove('animate');
    },500)
}

const chekDead = setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    if (blockLeft < 20 && blockLeft > 0 && characterTop >= 130) {
        block.style.animation = 'none';
        block.style.display = 'none';
        let rest = confirm('Restart?');
        if (rest) {
            location.reload()
        }
    }
}, 10);