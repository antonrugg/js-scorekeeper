
let select = document.getElementById('playto');
const btnReset = document.getElementById('reset');
let isGameOver = false;
let winningScore = 3;


const p1 = {
    score: 0,
    button: document.getElementById('p1Button'),
    display: document.getElementById('p1Display')
}

const p2 = {
    score: 0,
    button: document.getElementById('p2Button'),
    display: document.getElementById('p2Display')
}

function updateScore(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        player.display.textContent = player.score;
    }

    if (player.score === winningScore) {
        isGameOver = true;
        stopGame();
        p1.display.classList.add('green');
        p2.display.classList.add('red');
    } else if (opponent.score === winningScore) {
        p1.display.classList.add('red');
        p2.display.classList.add('green');

    }





}

function resetGame() {
    p1.score = 0;
    p2.score = 0;
    p1.display.textContent = p1.score;
    p2.display.textContent = p2.score;
    p1.button.disabled = false;
    p2.button.disabled = false;
    isGameOver = false;
    p1.display.classList.remove('red', 'green');
    p2.display.classList.remove('red', 'green');
}

function stopGame() {
    p1.button.disabled = true;
    p2.button.disabled = true;

}





p1.button.addEventListener('click', function () {
    updateScore(p1, p2);

});

p2.button.addEventListener('click', function () {
    updateScore(p2, p1);

});

btnReset.addEventListener('click', function () {
    resetGame();
});

select.addEventListener('change', function () {
    winningScore = parseInt(this.value);
    resetGame();
})

