let playerSelection;
let computerSelection;
let computerScore = 0;
let playerScore = 0;

function computerPlay() {
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

function playRound(playerSelection, computerSelection) {
    computerSelection = computerPlay();
    playerSelection = playerSelection.toLowerCase();
    if ((playerSelection==="rock" && computerSelection==="paper") ||
    (playerSelection==="paper" && computerSelection==="scissor") ||
    (playerSelection==="scissor" && computerSelection==="rock")){
        alert("You Lose!");
        computerScore++;
    }

    if ((playerSelection==="rock" && computerSelection==="scissor") ||
    (playerSelection==="paper" && computerSelection==="rock") ||
    (playerSelection==="scissor" && computerSelection==="paper")){
        alert("You Win!");
        playerScore++
    }

    if (playerSelection === computerSelection) {
        return String("It's a tie!");
    }
}

// creating the UI
const buttons = document.querySelectorAll('button');
const score = document.createElement('div');
const buttonDiv = document.getElementById('but-div');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let text = button.textContent;
        playerSelection = text.toLowerCase;
        playRound(playerSelection, computerSelection);
        score.innerHTML += "Computer's Score: ${computerScore} <br> Player's Score: ${playerScore}";
        score.setAttribute('#score');
        buttonDiv.appendChild(score);
    })
})

