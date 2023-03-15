// playing against computer, so randomly get a choice
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissors"];

    // using mathematical equation to get a number in range of [0, n - 1]
    return choices[Math.floor(Math.random() * 3)]; // hardcoded because always constant
}