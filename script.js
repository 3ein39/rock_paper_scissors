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
        return [`Draw! player: ${playerSelection} and computer: ${computerSelection}`, -1];
    }

    if (playerSelection === "rock" && computerSelection === "scissors") {
        result.num++;
        return [`You won! ${playerSelection} beats ${computerSelection}`,1]
    }

    if (playerSelection === "scissors" && computerSelection === "paper") {
        result.num++;
        return [`you won! ${playerSelection} beats ${computerSelection}`,1]
    }

    if (playerSelection === "paper" && computerSelection === "rock") {
        result.num++;
        return [`you won! ${playerSelection} beats ${computerSelection}`, 1]
    }

    if (playerSelection === "scissors" && computerSelection === "rock") {
        return [`you lose! ${computerSelection} beats ${playerSelection}`, 0]
    }

    if (playerSelection === "paper" && computerSelection === "scissors") {
        return [`you lose! ${computerSelection} beats ${playerSelection}`, 0]
    }

    if (playerSelection === "rock" && computerSelection === "paper") {
        return [`you lose! ${computerSelection} beats ${playerSelection}`, 0]
    }
}


// testing the code out
let game_finished = false;
let game_count = 0;
let status_div = document.getElementById('status');
let player_div = document.getElementById('player_score');
let computer_div = document.getElementById('cmp_score');
let result = {num: 0};
function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    if (game_finished)
        return;
    // let game return 1 if I won and 0 if computer one
    // returns -1 if the game was a draw
    let [message, won] = game(playerSelection, computerSelection, result);
    status_div.innerText = message;
    if (won === 1)
        player_div.innerText++;
    else if (won === 0)
        computer_div.innerText++;
    if (won !== -1)
        ++game_count;

    game_finished = game_count === 5;

    if (game_finished) {
        if (result.num >= 3)
            status_div.innerText = 'congrats you won!';
        else
            status_div.innerText = 'humm loser!'
    }
}

let buttons = document.querySelectorAll('#buttons button');
buttons.forEach((button) => {
    // console.log(button.attributes.choice.value);
    let choice = button.attributes.choice.value;
    button.addEventListener('click',() => playRound(choice));
})


