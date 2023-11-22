let gameStats = {
    wins: 0,
    losses: 0,
    ties: 0,
};

function game(you,comp) {
    if (comp === you) {
       gameStats.ties++; 
      return "This game is a tie";
    } else if ((comp === "Rock" && you === "Paper") ||
               (comp === "Paper" && you === "Scissors") ||
               (comp === "Scissors" && you === "Rock")) {
        gameStats.wins++;
        return "Congratulation!! You Won.";
    } else {
        gameStats.losses++;
        return "Oh!! You Lose. ";
    }
}

function computerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

let choices = document.querySelectorAll(".btn");
let clickSounds = document.querySelectorAll(".clickSound");
for (let i = 0; i < choices.length; i++) {
    choices[i].addEventListener("click", function() {
       clickSounds[i].play();
        let you = this.id;
        console.log("Your Choice:", you);
        let comp = computerChoice();
        console.log("Computer's Choice:", comp);
        document.getElementById("You").innerHTML = "You Chose: " + you;
        document.getElementById("Comp").innerHTML = "Computer Chose: " + comp;
        
      let result = game(you,comp);
      console.log(result);
        document.getElementById("result").innerHTML = "Result: " + result;
        document.getElementById("player-score").innerHTML =  gameStats.wins;
        document.getElementById("computer-score").innerHTML = gameStats.losses;
        document.getElementById("ties").innerHTML = gameStats.ties;
    });
} 
let reset = document.querySelector("#reset");
reset.addEventListener("click", function() {
    gameStats.wins = 0;
    gameStats.losses = 0;
    gameStats.ties = 0;
    document.getElementById("player-score").innerHTML =  gameStats.wins;
    document.getElementById("computer-score").innerHTML = gameStats.losses;
    document.getElementById("ties").innerHTML = gameStats.ties;
    document.getElementById("You").innerHTML = "";
    document.getElementById("Comp").innerHTML = "";
    document.getElementById("result").innerHTML = "";

});