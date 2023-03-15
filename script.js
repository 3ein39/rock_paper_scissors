// playing against computer, so randomly get a choice
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];

    // using mathematical equation to get a number in range of [0, n - 1]
    return choices[Math.floor(Math.random() * 3)]; // hardcoded because always constant
}

function lowerize(str){
    return str.toLowerCase();
}


function game(playerSelection, computerSelection) {
    // to be not case-sensitive, let's convert the inputs to lower case
    lowerize(playerSelection), lowerize(computerSelection);

    // handling draw case
    if (playerSelection === computerSelection) {
        return `Draw! player: ${playerSelection} and computer: ${computerSelection}`;
    }

    if (playerSelection === "rock" && computerSelection === "scissors") {
        return `You won! ${playerSelection} beats ${computerSelection}`
    }

    if (playerSelection === "scissors" && computerSelection === "paper") {
        return `you won! ${playerSelection} beats ${computerSelection}`
    }

    if (playerSelection === "paper" && computerSelection === "rock") {
        return `you won! ${playerSelection} beats ${computerSelection}`
    }

    if (playerSelection === "scissors" && computerSelection === "rock") {
        return `you lose! ${computerSelection} beats ${playerSelection}`
    }

    if (playerSelection === "paper" && computerSelection === "scissors") {
        return `you lose! ${computerSelection} beats ${playerSelection}`
    }

    if (playerSelection === "rock" && computerSelection === "paper") {
        return `you lose! ${computerSelection} beats ${playerSelection}`
    }
}


// testing the code out
