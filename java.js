function getComputerChoice() {
    let a = Math.floor(Math.random() * 100) +1;
    let computerChoice = ""
    if (a <= 33){
        computerChoice = "rock";
    } else if (a > 33 && a <= 66){
        computerChoice = "paper";
    } else computerChoice = "scissors" 
    
    return computerChoice
}

console.log(getComputerChoice())

function getHumanChoice() {
    let humanChoice = prompt("Make your move! Rock, Paper or Scissors");
    let lowerHumanChoice = humanChoice.toLowerCase();

    return lowerHumanChoice
}

console.log(getHumanChoice())