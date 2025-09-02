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
        };

        if(playerScore > computerScore){
            const playerScoreColor = document.getElementById("playerScore");
            const computerScoreColor = document.getElementById("computerScore"); 
            playerScoreColor.style.color = "green";
            computerScoreColor.style.color = "red";
        }
        else if(playerScore < computerScore){
            const playerScoreColor = document.getElementById("playerScore");
            const computerScoreColor = document.getElementById("computerScore"); 
            playerScoreColor.style.color = "red";
            computerScoreColor.style.color = "green";
        }
        else {
            const playerScoreColor = document.getElementById("playerScore");
            const computerScoreColor = document.getElementById("computerScore"); 
            playerScoreColor.style.color = "orange";
            computerScoreColor.style.color = "orange";
        };
  
    const sect = document.querySelector("section");
    const block1 = document.querySelector(".block1");
    const choices = document.createElement("p");
    choices.setAttribute("id", "choices")

        if (document.contains(document.getElementById("choices"))) {
            document.getElementById("choices").remove();
        }

    choices.textContent = "Player chooses: " + playerChoice + "." + " Computer chooses: " + computerChoice + ".";
    sect.appendChild(choices);

    document.getElementById("playerScore").innerHTML = playerScore;
    document.getElementById("computerScore").innerHTML = computerScore;

    if(playerScore == 5) {
        choices.textContent = "You Win!";
        choices.style.color = "green";
        block1.appendChild(choices);
    }
    else if(computerScore == 5){
        choices.textContent = "You lose!";
        choices.style.color = "red";
        block1.appendChild(choices);
    };

    if (playerScore == 5 || computerScore == 5) {
        buttons.forEach(button => {
            button.disabled = true;
        });

        buttons.forEach(button => {
            button.addEventListener("mouseover", () => {
            button.style.color = "";
            button.style.borderColor = "";
            button.style.borderWidth = "";
            });
        });
        const playAgain = document.createElement("button");
        playAgain.textContent = "Click to play again";
        playAgain.style.height = "100px";
        playAgain.style.width = "500px";
        playAgain.style.backgroundColor = "blue";
        playAgain.style.color = "white";
        sect.prepend(playAgain)
        
        playAgain.addEventListener("click", () => {
            playerScore = 0;
            computerScore = 0;

            document.getElementById("playerScore").innerHTML = playerScore;
            document.getElementById("computerScore").innerHTML = computerScore;

            document.getElementById("playerScore").style.color = "";
            document.getElementById("computerScore").style.color = "";

            buttons.forEach(button => {
                button.disabled = false;
                button.addEventListener("mouseover", () => {
                button.style.color = "blue";
                button.style.borderColor = "blue";
                button.style.borderWidth = "5px";
                });
            });

            playAgain.remove();
            block1.removeChild(choices)
        });  
    };

    return result + playerScore + computerScore;

  });
});


let computerChoice = "";

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