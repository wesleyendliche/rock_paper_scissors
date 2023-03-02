function getComputerChoice() {
    //create array with 3 possible values
    const gameChoices = ["ROCK", "PAPER", "SCISSORS"];

    //return one of them randomly
    return gameChoices[Math.floor(Math.random() * gameChoices.length)];
}

function game() {
    for (let i = 0; i < 3; i++) {
        //get player input and turn it automatically to Upper Case
        let playerSelection = prompt("Choose ROCK, PAPER OR SCISSORS").toUpperCase();
        let computerSelection = getComputerChoice();
        console.log(playerSelection + " x " + computerSelection);
        return playRound(playerSelection, computerSelection);
    }
}

//ROCK > SCISSORS //ROCK < PAPER //ROCK = ROCK
//PAPER > ROCK //PAPER < SCISSORS //PAPER = PAPER
//SCISSORS > PAPER //SCISSORS < ROCK //SCISSORS = SCISSORS
function playRound(playerSelection, computerSelection) {
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
    } else if(playerSelection == computerSelection) {
        return "It's a tie!";
    } else {
        return "Please, enter a valid option";
    }
}
