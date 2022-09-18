const computerScoreEl = document.querySelector('#computerScore');
const playerScoreEl = document.querySelector('#playerScore');
const resultsFinalLineEl  = document.querySelector('#resultsFinalLine');
const currentRoundFinalLineEl  = document.querySelector('#currentRoundFinalLine');

let playerScore = 0;
let computerScore = 0;
let gamesPlayed = 0;
let maxGamesPlayed = 5;

function getComputerChoice() {
    const choicesArray = ['Rock', 'Paper', 'Scissors']
    return choicesArray[Math.floor(Math.random() * 3)]
}

function declareScores() {
    computerScoreEl.textContent = `Computer Score: ${computerScore}`
    playerScoreEl.textContent = `Your Score: ${playerScore}`
    resultsFinalLine.textContent = ''
}



function playRound() {

    if (gamesPlayed >= maxGamesPlayed) return;
    
    let playerSelection = this.dataset.choice;
    let computerSelection = getComputerChoice();
    const winnersObj = {
        Rock: 'Scissors',
        Paper: 'Rock',
        Scissors: 'Paper',
    }

    //No longer required, because playerSelection is not typed. Keeping in case we need to type in the future.
    //playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    
    if (playerSelection === computerSelection) {
        currentRoundFinalLineEl.textContent = `It's a tie! You both chose ${playerSelection}`
    } else if (winnersObj[playerSelection] === computerSelection) {
        playerScore++
        currentRoundFinalLineEl.textContent = `You win! ${playerSelection} beats ${computerSelection}`
    } else {
        computerScore++
        currentRoundFinalLineEl.textContent = `You lose! ${computerSelection} beats ${playerSelection}`
    }

    declareScores();

    gamesPlayed++

    if (gamesPlayed >= maxGamesPlayed) gameOver();

}

function gameOver() {
    if (playerScore > computerScore) {
        resultsFinalLineEl.textContent = `You won ${playerScore} game${playerScore > 1 ? 's' : ''} to ${computerScore}!`
    } else if (computerScore > playerScore) {
        resultsFinalLineEl.textContent = `You lost ${playerScore} game${playerScore > 1 ? 's' : ''} to ${computerScore}!`
    } else {
        resultsFinalLineEl.textContent = `It's a tie! You both won ${playerScore} round${playerScore > 1 ? 's' : ''}!`
    }
}

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', playRound))