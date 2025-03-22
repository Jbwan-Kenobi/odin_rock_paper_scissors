function getComputerChoice() {
    let a = Math.floor(Math.random() * 100) +1;
    let computerChoice = ""
    if (a <= 33){
        computerChoice = "Rock";
    } else if (a > 33 && a <= 66){
        computerChoice = "Paper";
    } else computerChoice = "Scissors" 
    
    return computerChoice
}

console.log(getComputerChoice())