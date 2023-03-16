// playing against computer, so randomly get a choice
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];

    // using mathematical equation to get a number in range of [0, n - 1]
    return choices[Math.floor(Math.random() * 3)]; // hardcoded because always constant
}

function lowerize(str){
    return str.toLowerCase();
}


function game(playerSelection, computerSelection,result) {
    // to be not case-sensitive, let's convert the inputs to lower case
    playerSelection =  lowerize(playerSelection);
    computerSelection =  lowerize(computerSelection);

    // handling draw case
    if (playerSelection === computerSelection) {
        return `Draw! player: ${playerSelection} and computer: ${computerSelection}`;
    }

    if (playerSelection === "rock" && computerSelection === "scissors") {
        result.num++;
        return `You won! ${playerSelection} beats ${computerSelection}`
    }

    if (playerSelection === "scissors" && computerSelection === "paper") {
        result.num++;
        return `you won! ${playerSelection} beats ${computerSelection}`
    }

    if (playerSelection === "paper" && computerSelection === "rock") {
        result.num++;
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
function playRound() {
    let result = {num: 0};
    for (let i = 1; i <= 5; ++i) {
        let playerSelection = window.prompt("Make your choice!: ");

        let computerSelection = getComputerChoice();
        console.log(`Round :${i}`, " : " , game(playerSelection, computerSelection, result));
    }

    if (result >= 3)
        console.log("Congrats you won!\n");
    else
        console.log("Hmm, loser!\n")
}

playRound();


