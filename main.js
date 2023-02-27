//create array with 3 possible values
const gameChoices = ["ROCK", "PAPER", "SCISSORS"];

function getComputerChoice() {
    //return one of them randomly
    return gameChoices[Math.floor(Math.random() * gameChoices.length)];
}

//ROCK > SCISSORS //ROCK < PAPER //ROCK = ROCK
//PAPER > ROCK //PAPER < SCISSORS //PAPER = PAPER
//SCISSORS > PAPER //SCISSORS < ROCK //SCISSORS = SCISSORS
function playRound(playerSelection, computerSelection) {
    avoidMispelling();

    if(playerSelection == "ROCK" && computerSelection == "PAPER") {
        return "The computer chose PAPER. You lost!";
    } else if(playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        return "The computer chose SCISSORS. You won!";
    } else if(playerSelection == "PAPER" && computerSelection == "ROCK") {
        return "The computer chose ROCK. You won!";
    } else if(playerSelection == "PAPER" && computerSelection == "SCISSORS") {
        return "The computer chose SCISSORS. You lost!";
    } else if(playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        return "The computer chose PAPER. You won!";
    } else if(playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        return "The computer chose ROCK. You lost!";
    } else {
        return "It's a tie!";
    } 
}

function avoidMispelling() {
    if(playerSelection != gameChoices) {
        return "Please, enter a valid option";
    } else {
        playRound();
    }
}

//get player input and turn it automatically to Upper Case
const playerSelection = prompt("Choose ROCK, PAPER OR SCISSORS").toUpperCase();
const computerSelection = getComputerChoice();
console.log(playerSelection + " x " + computerSelection);
console.log(playRound(playerSelection, computerSelection))

function game() {
    for (let i = 0; i < 5; i++) {
        playRound();
    }
}