// below function is complete and optimized
function getComputerChoice (){
    let result = Math.random()
    return result <= 0.33 ? 'rock' : result <= 0.66 ? 'paper' : 'scissor'
}

let computerScore = 0;
let playerScore = 0;

function playRound (computerSelection, playerSelection){
    let playerSelectionLC = playerSelection.toLowerCase()
    // console.log(`Computer->${computerSelection}, Player->${playerSelectionLC}`)
    
    
    if (playerSelectionLC === 'rock') {
        if(computerSelection === 'rock') {
            return 'Tie! Rock vs Rock';
        } else if (computerSelection === 'paper') {
            computerScore++;
            return 'You lost! Paper beats Rock';
        } else {
            playerScore++;
            return 'You won! Rock beats Scissors';
        }
    } else if (playerSelectionLC === 'paper') {
        if(computerSelection === 'rock') {
            playerScore++;
            return 'You won! Paper beats Rock';
        } else if (computerSelection === 'paper') {
            return 'Tie! Paper vs Paper';
        } else {
            computerScore++;
            return 'You lost! Scissors beats Paper';
        }
    } else if (playerSelectionLC === 'scissors') {
        if(computerSelection === 'rock') {
            computerScore++;
            return 'You lost! Rock beats Scissors';
        } else if (computerSelection === 'paper') {
            playerScore++;
            return 'You won! Scissors beats Paper';
        } else {
            return 'Tie! Scissors vs Scissors';
        }
    } else {
        alert('Please enter either rock, paper or scissors')
    }
}


function game(){
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("rock, paper or scissors?", )
        const computerSelection = getComputerChoice()
        console.log(playRound(computerSelection, playerSelection));
        console.log(`Computer: ${computerScore} || Player: ${playerScore}`)
    }
    
}

console.log(game())