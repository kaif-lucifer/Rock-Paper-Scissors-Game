let gameStats = {
    wins: 0,
    losses: 0,
    ties: 0,
};

// Function to show rules and icons in an alert
function showRules() {
    const rules = "Rock, Paper, Scissors Rules:\n\n" +
                  "1. Rock crushes Scissors\n" +
                  "2. Scissors cuts Paper\n" +
                  "3. Paper covers Rock\n\n" +
                  "Choose your move wisely!";

    const icons = "Icons:\n\n" +
                  "🪨🗿 - Rock\n" +
                  "📄 - Paper\n" +
                  "✂️ - Scissors";

    const alertMessage = rules + "\n\n" + icons;

    alert(alertMessage);
}

// Call the function to show the rules and icons
showRules();

function game(you,comp) {
    if (comp === you) {
       gameStats.ties++; 
      return "This game is a tie";
    } else if ((comp === "Rock" && you === "Paper") ||
               (comp === "Paper" && you === "Scissors") ||
               (comp === "Scissors" && you === "Rock")) {
        gameStats.wins++;
        return "Congratulation!! You Win.";
    } else {
        gameStats.losses++;
        return "Oh!! You Lose. ";
    }
}

function computerChoice() {
    const choices = ["", "Rock", "Paper", "Scissors"];
    const randomIndex = Math.floor((Math.random() * 3)+ 1);
    console.log(randomIndex)
    return choices[randomIndex];
}



function playSound(result) {
  const winSound = document.getElementById("winSound");
  const loseSound = document.getElementById("loseSound");
  const tieSound = document.getElementById("tieSound");

  switch (result) {
      case "Congratulation!! You Win.":
        setTimeout(() => {
          winSound.play();
        }, 800);
          break;
      case "Oh!! You Lose. ":
        setTimeout(() => {
           loseSound.play();
        }, 800);
          break;
      case "This game is a tie":
        setTimeout(() => {
          tieSound.play();
        },800);
          break;
      default:
          break;
  }
}



let choices = document.querySelectorAll(".btn");
let clickSounds = document.querySelectorAll(".clickSound");
for (let i = 0; i < choices.length; i++) {
    choices[i].addEventListener("click", function() {
       clickSounds[i].play();
        let you = this.id;
        document.getElementById("You").innerHTML = "You Chose: " + you;
      //  console.log("Your Choice:", you);
        
        let comp = computerChoice();
        //console.log("Computer's Choice:", comp);
        document.getElementById("Comp").innerHTML = "Computer Chose: " + comp;
        let result = game(you,comp);
        playSound(result);
      //loseSound.play();
      //console.log(result);
        
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
