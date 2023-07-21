const prompt = require('prompt-sync') ();

const rps = (choice1, choice2) => {
    let player = 0
    let comp = 0

    let compChoice = Math.random();
    choice2 = compChoice < 0.33 ? "rock" : ( compChoice > 0.66 ? "scissors" : "paper" ); 

    if (choice1 === choice2) return "Draw!";
    if (choice1 === "get count") return score;

    if (choice1 === "rock" && choice2 === "scissors") {
        return "User wins!"
    } else if (choice1 === "scissors" && choice2 === "paper") {
        return "User wins!" 
    } else if (choice1 === "paper" && choice2 === "rock") {
        return "User Wins!" 
    } else if (choice1 === "scissors" && choice2 === "rock") {
        return "Computer Wins!"
    } else if (choice1 === "paper" && choice2 === "scissors") {
        return "Computer Wins!" 
    } else if (choice1 === "rock" && choice2 === "paper") {
        return "Computer Wins!"
    }
};

// const rules = {rock: 'sicssors', paper: 'rock', scissors: 'paper'};
// if (choice2 === rules[choice1]) {
//     return "User wins!"
// } else { 
//     return "Computer wins!"


// let score = console.log(`User Score: ${player} Computer Score: ${comp}`);


// module.exports = {
//     rps
// }

// was troubleshooting with the counter and display of results, can fix in my own time just wanted to
// upload a working game

let choice1 = prompt("Enter Choice: ")
console.log(rps(choice1,))
