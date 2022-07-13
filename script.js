const rps = ["rock", "paper", "scissor"];
let playerSelection = prompt("Make your choice: ");
playerSelection = playerSelection.toLowerCase();

function getRandomItem() {
    const randomIndex = Math.floor(Math.random() * 3);
    switch (randomIndex){
        case 0:
            return "rock";
        case 1:
            return  "paper";
        case 2:
            return "scissor";
    }
}
const computerSelection = getRandomItem();

function playRound() {
    if ((playerSelection==="rock" && computerSelection==="paper") ||
    (playerSelection==="paper" && computerSelection==="scissor") ||
    (playerSelection==="scissor" && computerSelection==="rock")){
        return String("You Lose! paper beats rock");
    }

    if ((playerSelection==="rock" && computerSelection==="scissor") ||
    (playerSelection==="paper" && computerSelection==="rock") ||
    (playerSelection==="scissor" && computerSelection==="paper")){
        return String("You Win! rock beats scissor");
    }

    if (playerSelection === computerSelection) {
        return String("It's a tie!");
    }
}
alert(playRound());