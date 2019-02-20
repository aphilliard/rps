function playRound(p, c) {

    console.log("Computer selects " + computerSelection);
    console.log("Player selects " + playerSelection);

    if (p === c) {
        console.log("Tie!");
    }
    else if ((p === "rock" && c === "scissors") || (p === "paper" && c === "rock")) {
        console.log("Player wins!");
    }
    else {
        console.log("Computer wins!");
    }
}

var i;
for (i = 0; i < 5; i++) {
    console.log("Round: " + (i+1));
    var rpsChoice = ["rock", "paper", "scissors"];
    var playerSelection = "";
    do {
        var playerSelection = prompt("rock, paper, scissors?");
    }
    while (!(rpsChoice.includes(playerSelection)));

    var computerSelection = rpsChoice[Math.floor(Math.random() * rpsChoice.length)];

    playRound(playerSelection, computerSelection)
}

 
