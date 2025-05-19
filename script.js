function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}
function getComputerChoice() {
    switch (getRandomInt(3)) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
}
function getHumanChoice() {
    return prompt(`Game ${gameNumber} of ${numGames}: Enter either: rock, paper, or scissors.`)
}

function playRound(computerChoice, humanChoice) {
    console.log(`your choice:${humanChoice}`)
    console.log(`computer choice:${computerChoice}`)
    if (computerChoice === humanChoice) {
        console.log("It's a draw.")
        draws++;
    } else if (computerChoice === "rock" && humanChoice === "scissors") {
        console.log("Computer Wins - rock breaks scissors")
        computerScore++;
    } else if (computerChoice === "paper" && humanChoice === "rock") {
        console.log("Computer Wins - paper covers rock")
        computerScore++;
    } else if (computerChoice === "scissors" && humanChoice === "paper") {
        console.log("Computer Wins - scissors cuts paper")
        computerScore++;
    } else if (computerChoice === "rock" && humanChoice === "paper") {
        console.log("You Win - paper covers rock")
        humanScore++;
    } else if (computerChoice === "paper" && humanChoice === "scissors") {
        console.log("You Win - scissors cut paper")
        humanScore++;
    } else if (computerChoice === "scissors" && humanChoice === "rock") {
        console.log("You Win - rock breaks scissors")
        humanScore++;
    }
    console.log(`You ${humanScore}, Computer ${computerScore} Draws ${draws}`);
}
function playGame(numberOfRounds) {
    for (let i = 0; i < numberOfRounds; i++) {
        let hc = "";
        let isInvalid = true;

        while (isInvalid) {
            hc = getHumanChoice();
            if (typeof  hc === "string"){
                hc = hc.toLowerCase();
                if (hc === 'rock' || hc === 'paper' || hc === 'scissors') {
                    isInvalid = false;
                }
            }
        }
        playRound(getComputerChoice(), hc);
        gameNumber++;
    }
}

console.log("This is Rock Paper Scissors (console edition)");
let computerScore = 0;
let humanScore = 0;
let draws = 0;
let gameNumber = 1;
const numGames = 5;
playGame(numGames);
console.log(`Final score: You ${humanScore}, Computer ${computerScore} Draws ${draws}`);