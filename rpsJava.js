// Select all buttons inside the "buttons" div
const buttons = document.querySelectorAll(".buttons button");

// Loop through each button and attach event listeners
buttons.forEach(button => {
  // Change background color when hovered
  button.addEventListener("mouseover", () => {
    button.style.color = "blue";
    button.style.borderColor = "blue";
    button.style.borderWidth = "5px";
  });

  // Reset background color when mouse leaves
  button.addEventListener("mouseout", () => {
    button.style.color = "";
    button.style.borderColor = "";
    button.style.borderWidth = "";
  });
});

let playerScore = 0;
let computerScore = 0;


buttons.forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.id; // "rock", "paper", or "scissors"
    const computerChoice = getComputerChoice();
    const result = playRound(computerChoice, playerChoice);

        if(result == "player") {
            playerScore = playerScore + 1
        }
        else if(result == "computer") {
            computerScore = computerScore + 1
        }
    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;
    console.log("Player:", playerChoice, " Computer:", computerChoice, " Winner:", result);
    console.log("player score = "+ playerScore + " ComputerScore = " + computerScore)
  });
});


let computerChoice = "";
//let playerChoice = "";

function getComputerChoice() {
    let a = Math.floor(Math.random() * 100) +1;
    let computerChoice = ""
    if (a <= 33) {
        computerChoice = "rock";
    } else if (a > 33 && a <= 66) {
        computerChoice = "paper";
    } else computerChoice = "scissors" 
    
    return computerChoice
};

console.log("Computer Choice = " + getComputerChoice())

    function playRound(computerChoice, playerChoice) {
    let winner = ""
    if(computerChoice == "rock" && playerChoice == "scissors" ||
       computerChoice == "paper" && playerChoice == "rock" ||
       computerChoice == "scissors" && playerChoice == "paper") {
       winner = "computer";
       }
    else if(playerChoice == "rock" && computerChoice == "scissors" ||
        playerChoice == "paper" && computerChoice == "rock" ||
        playerChoice == "scissors" && computerChoice == "paper") {
        winner = "player";
        } else {
            winner = "draw"
        }

    return winner
    console.log(winner)
    };

//console.log(playerChoice)