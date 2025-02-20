function playGame(){
function getComputerChoice(){
const computerChoice = Math.floor(Math.random()* 3);
const options = ["ROCK", "PAPER", "SCISSORS"];
return options[computerChoice];
} // GETS COMPUTER CHOICE

function getHumanOption(){
    const humanOption = (prompt("Please choose: ROCK, PAPER or SCISSORS")).toUpperCase();
    if (humanOption === "ROCK" || humanOption === "PAPER" || humanOption === "SCISSORS"){
        return humanOption;
    } else {
        alert("That is not a valid option, please follow instructions to play.")
        return getHumanOption()
    } 
} // GETS HUMAN OPTION IF VALID
let humanScore = 0;
let computerScore = 0;

// SINGLE ROUND
function playRound(humanChoice, computerChoice){

    if (humanChoice === computerChoice){
        console.log(`Its a tie! You both choose: ${humanChoice}`);
        console.log(`HUMAN: ${humanScore} | COMPUTER: ${computerScore}`);
    } else if (
        (humanChoice === "ROCK" && computerChoice === "SCISSORS") ||
        (humanChoice === "SCISSORS" && computerChoice === "PAPER") || 
        (humanChoice === "PAPER" && computerChoice === "ROCK")
    ){
        humanScore++;
        console.log(`${humanChoice} beats ${computerChoice}. HUMAN WIN!`);
        console.log(`HUMAN: ${humanScore} | COMPUTER: ${computerScore}`);
    } else{
        computerScore++;
        console.log(`${computerChoice} beats ${humanChoice}. COMPUTER WIN!`);
        console.log(`HUMAN: ${humanScore} | COMPUTER: ${computerScore}`);
    }
};

for (let i = 0; i < 5; i++){
    playRound(getHumanOption(), getComputerChoice());
}

if (humanScore > computerScore){
    alert(`You won ${humanScore} out of 5 rounds! You win!`)
} else if(humanScore === computerScore){
    alert(`It's a tie! You both won ${humanScore} out of 5 rounds!`)
} else {
    alert(`Computer won ${computerScore} out of 5 rounds, you lose!`)
}
}
