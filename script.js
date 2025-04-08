
let gamesPlayed = 0;
let wins = 0;
let losses = 0;

function runGame(playerChoice) {
    const coinFlip = Math.random() < 0.5 ? 'heads' : 'tails';
    const gameResult = playerChoice === coinFlip ? 'win' : 'loss';

    if (gameResult === 'win') {
        wins++;
    } else {
        losses++;
    }
    gamesPlayed++;

    document.getElementById('player-pick').textContent = playerChoice;
    document.getElementById('flip-result').textContent = coinFlip;
    document.getElementById('game-result').textContent = gameResult;

    document.getElementById('player-image').src = `coin_flip/${playerChoice}.svg`;
    document.getElementById('flip-image').src = `coin_flip/${coinFlip}.svg`;

    document.getElementById('count').textContent = gamesPlayed;
    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;
}

function resetScore() {
    gamesPlayed = 0;
    wins = 0;
    losses = 0;

    document.getElementById('count').textContent = gamesPlayed;
    document.getElementById('wins').textContent = wins;
    document.getElementById('losses').textContent = losses;

    document.getElementById('player-pick').textContent = '';
    document.getElementById('flip-result').textContent = '';
    document.getElementById('game-result').textContent = '';
    document.getElementById('player-image').src = '';
    document.getElementById('flip-image').src = '';
}

document.getElementById('heads').addEventListener('click', () => runGame('heads'));
document.getElementById('tails').addEventListener('click', () => runGame('tails'));
document.getElementById('reset').addEventListener('click', resetScore);
