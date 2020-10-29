//
//
// let cvs = document.querySelector('#canvas');
// let ctx = cvs.getContext('2d');
//
// let bird = new Image();
// let bg = new Image();
// let fg = new Image();
// let pipeUp = new Image();
// let pipeBottom = new Image();
//
// bird.src = 'img/flappy/bird.png';
// bg.src = 'img/flappy/bg.png';
// fg.src = 'img/flappy/fg.png';
// pipeUp.src = 'img/flappy/pipeTop.png';
// pipeBottom.src = 'img/flappy/pipeBottom.png';
// // Звуковые файлы
// let fly = new Audio();
// let score_audio = new Audio();
//
// fly.src = "audio/flappy/fly.mp3";
// score_audio.src = "audio/flappy/score.mp3";
//
//
// let gap = 100;
//
// // При нажатии на какую-либо кнопку
// document.addEventListener("keydown", moveUp);
// document.addEventListener('touchstart', moveUp);
//
// function moveUp() {
//     yPos -= 20;
//     fly.play();
// }
//
// // Создание блоков
// let pipe = [];
//
// pipe[0] = {
//     x : cvs.width,
//     y : 0
// };
//
// let score = 0;
// // Позиция птички
// let xPos = 10;
// let yPos = 150;
// let grav = 1;
//
// function draw() {
//     ctx.drawImage(bg, 0, 0);
//
//     for(let i = 0; i < pipe.length; i++) {
//         ctx.drawImage(pipeUp, pipe[i].x, pipe[i].y);
//         ctx.drawImage(pipeBottom, pipe[i].x, pipe[i].y + pipeUp.height + gap);
//
//         pipe[i].x--;
//
//         if(pipe[i].x === 100) {
//             pipe.push({
//                 x : cvs.width,
//                 y : Math.floor(Math.random() * pipeUp.height) - pipeUp.height
//             });
//         }
//
//         // Отслеживание прикосновений
//         if(xPos + bird.width >= pipe[i].x
//             && xPos <= pipe[i].x + pipeUp.width
//             && (yPos <= pipe[i].y + pipeUp.height
//                 || yPos + bird.height >= pipe[i].y + pipeUp.height + gap) || yPos + bird.height >= cvs.height - fg.height) {
//             ctx.fillStyle = "#000";
//             ctx.font = "24px Verdana";
//             ctx.fillText('Game Over:' + score, 50, 200);
//             setTimeout(() => location.reload(), 2000); // Перезагрузка страницы
//         }
//
//         if(pipe[i].x === 5) {
//             score+=10;
//             score_audio.play();
//         }
//     }
//
//     ctx.drawImage(fg, 0, cvs.height - fg.height);
//     ctx.drawImage(bird, xPos, yPos);
//
//     yPos += grav;
//
//     ctx.fillStyle = "#000";
//     ctx.font = "24px Verdana";
//     ctx.fillText("Score: " + score, 10, cvs.height - 20);
//
//     requestAnimationFrame(draw);
//
//
// }
// function start() {
//     ctx.drawImage(bg, 0, 0);
//
//     ctx.drawImage(pipeUp, 100, 0);
//     ctx.drawImage(pipeBottom, 100, pipeUp.height + gap);
//
//     ctx.drawImage(fg, 0, cvs.height - fg.height);
//     ctx.drawImage(bird, xPos, yPos);
//
//     // ctx.fillStyle = "#000";
//     // ctx.font = "24px Verdana";
//     // ctx.fillText('Press to START', 50, 200);
//
//
//     let btPress = document.querySelector('.bt_press');
//     btPress.onclick = function () {
//         btPress.style.display = 'none';
//         draw();
//     }
//
//
// }
// start();

let block = document.getElementById('block_2');
let hole = document.getElementById('hole_2');
let character = document.getElementById('character_2');
let modal = document.getElementById('modal');
let restart = document.getElementById('rest');
let back = document.getElementById('back');
let scoreTag = document.getElementById('score');
let jumping = 0;
let score = 0;

restart.addEventListener('click', () => {
    location.reload();
});
back.addEventListener('click', () => {
    document.location.href = 'index.html';
});

hole.addEventListener('animationiteration', () => {
    let random = Math.random()*3;
    let top = (random * 100) + 150;
    hole.style.top = -(top) + 'px';
    score+=10;
    scoreTag.innerHTML = `${score} point`;
});

setInterval(function () {
    let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
    if (jumping == 0) {
        character.style.top = (characterTop + 3) + 'px';
    }
    let blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue('left'));
    let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue('top'));
    let cTop = -(500 - characterTop);
    if (characterTop > 480 || (blockLeft<20 && blockLeft > -50 && (cTop < holeTop || cTop > holeTop+150))) {
        character.style.display = 'none';
        block.style.display = 'none';
        modal.style.display = 'block';
        // score = 0;
        clearInterval();
    }
}, 15);

function jump() {
    jumping = 1;
    let jupmCount = 0;
    let jumpInterval = setInterval(function () {
        let characterTop = parseInt(window.getComputedStyle(character).getPropertyValue('top'));
        if ((characterTop > 6) && jupmCount < 15) {
            character.style.top = (characterTop - 5) + 'px';
        }
        if (jupmCount > 20) {
            clearInterval(jumpInterval);
            jumping = 0;
            jupmCount = 0;
        }
        jupmCount++;
    },10);
}