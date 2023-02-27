function getComputerChoice() {
    //create array with 3 possible values
    const gameChoices = ["ROCK", "PAPER", "SCISSORS"];
    //return one of them randomly
    return gameChoices[Math.floor(Math.random() * gameChoices.length)];
}

function playRound(playerSelection, computerSelection) {
    
}

//get player input and turn it automatically to Upper Case
const playerSelection = prompt("Choose ROCK, PAPER OR SCISSORS").toUpperCase();
console.log(playerSelection);
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))

function game() {
    playRound();

    for (let i = 0; i < 5; i++) {
        console.log('playing')
    }
}