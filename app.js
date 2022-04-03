// const p1 = {
//     score: 0,
//     button: document.querySelector('#p1Button'),
//     display: document.querySelector('#p1Display')
// }
// const p2 = {
//     score: 0,
//     button: document.querySelector('#p2Button'),
//     display: document.querySelector('#p2Display')
// }

// const resetButton = document.querySelector('#reset');
// const winningScoreSelect = document.querySelector('#playto');
// let winningScore = 3;
// let isGameOver = false;

// function updateScores(player, opponent) {
//     if (!isGameOver) {
//         player.score += 1;
//         if (player.score === winningScore) {
//             isGameOver = true;
//             player.display.classList.add('has-text-success');
//             opponent.display.classList.add('has-text-danger');
//             player.button.disabled = true;
//             opponent.button.disabled = true;
//         }
//         player.display.textContent = player.score;
//     }
// }


// p1.button.addEventListener('click', function () {
//     updateScores(p1, p2)
// })
// p2.button.addEventListener('click', function () {
//     updateScores(p2, p1)
// })


// winningScoreSelect.addEventListener('change', function () {
//     winningScore = parseInt(this.value);
//     reset();
// })

// resetButton.addEventListener('click', reset)

// function reset() {
//     isGameOver = false;
//     for (let p of [p1, p2]) {
//         p.score = 0;
//         p.display.textContent = 0;
//         p.display.classList.remove('has-text-success', 'has-text-danger');
//         p.button.disabled = false;
//     }
// }


let select = document.getElementById('playto');
const btnReset = document.getElementById('reset');
let winningScore = 3;
let isGameOver = false;


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
            p2.display.classList.add('green');
            p1.display.classList.add('red');
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

select.addEventListener('change', function(){
    
})




