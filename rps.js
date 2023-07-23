const prompt = require("prompt-sync") ();
const colours = require("ansi-colors");

const arr = ['rock', 'paper', 'scissors'];

const getCompChoice = () => {
    const choice = Math.random(Math.floor());
    const ranChoice = choice < 0.33 ? "rock" : ( choice > 0.66 ? "scissors" : "paper" ); 
    return ranChoice;
    
}

const getUserChoice = () => {
    let userChoice = "";
    let validInput = false;

    while (!validInput) {
        userChoice = prompt("Rock, Paper, Scissors: ");
        if (userChoice === "rock" || userChoice === "paper" || userChoice === "scissors") {
            validInput = true;
        }
    }
    return userChoice;
}

const playGame = (userChoice, compChoice) => {
    const result = getWinner(userChoice, compChoice);
    if (result === "Draw") { 
        return colours.yellow("It's a draw!");
    } else if (result === "User") {
        return colours.green(`User wins! ${userChoice} beats ${compChoice}`);
    } else {
        return colours.red(`Computer wins! ${compChoice} beats ${userChoice}`);
    }
} 

const getWinner = (userChoice, compChoice) => {
    
    if (userChoice === compChoice) {
        return 'Draw';
    } else if (userChoice === "rock" && compChoice === "scissors") {
        return "User";
    } else if (userChoice === "scissors" && compChoice === "paper") {
        return "User"; 
    } else if (userChoice === "paper" && compChoice === "rock") {
        return "User";
    } else if (userChoice === "scissors" && compChoice === "rock") {
        return "Computer";
    } else if (userChoice === "paper" && compChoice === "scissors") {
        return "Computer";
    } else if (userChoice === "rock" && compChoice === "paper") {
        return "Computer";
    }
};

const playRps = () => {
    let userScore = 0;
    let compScore = 0;
    for (let i =0; i<3; i++) {
        const userChoice = getUserChoice();
        const compChoice = getCompChoice();
        console.log(playGame(userChoice, compChoice));
        if (getWinner(userChoice, compChoice) === "User") {
            userScore++;
        } else if (getWinner(userChoice, compChoice) === "Computer") {
            compScore++;
    }
}}

playRps();

module.exports = {
    getCompChoice,
    getUserChoice,
    getWinner,
    playGame,
    playRps
}
