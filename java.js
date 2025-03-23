let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    let a = Math.floor(Math.random() * 100) +1;
    let computerChoice = ""
    if (a <= 33) {
        computerChoice = "rock";
    } else if (a > 33 && a <= 66) {
        computerChoice = "paper";
    } else computerChoice = "scissors" 
    
    return computerChoice
}

/*console.log(getComputerChoice())*/

function getHumanChoice() {
    let humanChoice = prompt("Make your move! Rock, Paper or Scissors");
    let lowerHumanChoice = humanChoice.toLowerCase();

    return lowerHumanChoice
}

/*console.log(getHumanChoice())*/

function playRound(computerChoice, humanChoice) {
    let winner = ""
    if(computerChoice == "rock" && humanChoice == "scissors" ||
       computerChoice == "paper" && humanChoice == "rock" ||
       computerChoice == "scissors" && humanChoice == "paper") {
       winner = "computer";
       }
    else if(humanChoice == "rock" && computerChoice == "scissors" ||
        humanChoice == "paper" && computerChoice == "rock" ||
        humanChoice == "scissors" && computerChoice == "paper") {
        winner = "human";
        } else {
            winner = "draw"
        }

    return winner
}

function playGame() {
    for(let i = 1; i <= 5; i++) {
        let computer = getComputerChoice();
        let human = getHumanChoice();
        let win = playRound(computer, human)

            if(win == "computer") {
                console.log("You lose! " + computer + " beats " + human)
            } else if (win == "human"){
                console.log("You win! " + human + " beats " + computer)
            } else {
                console.log("It's a draw: " + human + " matches " + computer)
            }
        
            if(win == "computer"){
                computerScore = computerScore + 1
            } else if (win == "human") {
                humanScore = humanScore +1
            }
        
        console.log("Current score: You = " + humanScore + " Computer = " + computerScore)
    }
}

console.log(playGame())

if(computerScore > humanScore) {
    alert("Computer Wins! " + computerScore + " - " + humanScore + " Unlucky Loser!");
} else if(humanScore > computerScore) {
    alert("Congratulations! You Win. " + humanScore + " - " + computerScore)
} else {
    alert("It's a draw, " + computerScore + " - " + humanScore + " No winners this time, or did we both win?")
}
