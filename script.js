let roundCount = 0;
let humanScore = 0;
let computerScore = 0;
let draws = 0;

//functions to support computer play
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function getComputerChoice() {
  switch (getRandomInt(3)) {
    case 0:
      return "Rock";
      break;
    case 1:
      return "Paper";
      break;
    case 2:
      return "Scissors";
      break;
  }
}
// add round results to the scoreboard
function addRowToScoreboard(round, pChoice, cChoice, resultText) {
  const table = document.getElementById("scoreboard");
  const tableBody = table.querySelector("tbody");

  const newRow = tableBody.insertRow(-1);

  const roundCell = newRow.insertCell(-1);
  roundCell.textContent = round;

  const playerCell = newRow.insertCell(-1);
  playerCell.textContent = pChoice;

  const computerCell = newRow.insertCell(-1);
  computerCell.textContent = cChoice;

  const resultCell = newRow.insertCell(-1);
  resultCell.textContent = resultText;
}

//game logic for playing and scoring one round
//called by the button event listener
function playRound(computerChoice, humanChoice) {
  var resultText;
  roundCount++;

  //score it
  if (computerChoice === humanChoice) {
    resultText = "It's a draw.";
    draws++;
  } else if (computerChoice === "Rock" && humanChoice === "Scissors") {
    resultText = "Computer Wins - rock breaks scissors";
    computerScore++;
  } else if (computerChoice === "Paper" && humanChoice === "Rock") {
    resultText = "Computer Wins - paper covers rock";
    computerScore++;
  } else if (computerChoice === "Scissors" && humanChoice === "Paper") {
    resultText = "Computer Wins - scissors cuts paper";
    computerScore++;
  } else if (computerChoice === "Rock" && humanChoice === "Paper") {
    resultText = "Player Wins - paper covers rock";
    humanScore++;
  } else if (computerChoice === "Paper" && humanChoice === "Scissors") {
    resultText = "Player Wins - scissors cut paper";
    humanScore++;
  } else if (computerChoice === "Scissors" && humanChoice === "Rock") {
    resultText = "Player Wins - rock breaks scissors";
    humanScore++;
  }
  addRowToScoreboard(roundCount, humanChoice, computerChoice, resultText);
  //update the stats under teh scoreboard
  stats = document.querySelector("p#stats");
  stats.textContent = `Player Score: ${humanScore} Computer Score: ${computerScore} Draws: ${draws}`;
}

//get the ui container
uiArea = document.querySelector("div.ui-container");
// uiArea.style.backgroundColor = 'yellow';
uiArea.style.fontSize = "24px";

//get the button area set up
btnArea = document.querySelector("div.btn-container");

rockBtn = document.createElement("button");
rockBtn.textContent = "Rock";
btnArea.appendChild(rockBtn);

paperBtn = document.createElement("button");
paperBtn.textContent = "Paper";
btnArea.appendChild(paperBtn);

scissorsBtn = document.createElement("button");
scissorsBtn.textContent = "Scissors";
btnArea.appendChild(scissorsBtn);

//add event listener and common styles
buttons = document.querySelectorAll("button");
buttons.forEach((button) => {
  //set common styles
  button.style.fontSize = "24px";
  button.style.padding = "8px 16px";
  button.style.marginLeft = "16px";
  button.style.marginRight = "8px";
  button.style.width = "125px";
  button.style.backgroundColor = "#1b5abf";
  button.style.color = "white";
  button.addEventListener("click", () => {
    playRound(getComputerChoice(), button.textContent);
  });
});
