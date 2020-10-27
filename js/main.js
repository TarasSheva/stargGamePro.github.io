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