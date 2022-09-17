function getComputerChoice() {
    const choicesArray = ['Rock', 'Paper', 'Scissors']
    return choicesArray[Math.floor(Math.random() * 3)]
}

function playRound(playerSelection, computerSelection) {
    const winnersObj = {
        Rock: 'Scissors',
        Paper: 'Rock',
        Scissors: 'Paper',
    }
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    
    if (playerSelection === computerSelection) {
        return [0, 0, `It's a tie! You both chose ${playerSelection}`]
    } else if (winnersObj[playerSelection] === computerSelection) {
        return [1, 0, `You win! ${playerSelection} beats ${computerSelection}`]
    } else {
        return [0, 1, `You lose! ${computerSelection} beats ${playerSelection}`]
    }
}

function game() {
    let rounds = 5;
    let playerScore = 0;
    let computerScore = 0;
    let roundResult;

    for (let i = 0; i < rounds; i++) {
        roundResult = playRound(prompt(), getComputerChoice())
        playerScore += roundResult[0]
        computerScore += roundResult[1]
        console.log(roundResult[2])
    }

    if (playerScore > computerScore) {
        return `You won ${playerScore} game${playerScore > 1 ? 's' : ''} to ${computerScore}!`
    } else {
        return `You lost ${playerScore} game${playerScore > 1 ? 's' : ''} to ${computerScore}!`
    }

}
        

console.log(game())