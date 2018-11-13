var computerScore = Math.floor(Math.random() * (120 - 19)) + 19;
var blueGem = Math.floor(Math.random() * 12) + 1;
var purpleGem = Math.floor(Math.random() * 12) + 1;
var greenGem = Math.floor(Math.random() * 12) + 1;
var iceGem = Math.floor(Math.random() * 12) + 1;
var playerScore = 0;
var wins = 0;
var losses = 0;

window.onload = function () {
    var compPrint = document.getElementById("compScore").innerHTML = computerScore;
    var win = document.getElementById("wins").innerHTML = ("Wins: " + wins);
    var loss = document.getElementById("losses").innerHTML = ("Losses: " + losses);
}



function changeBlue() {
    if (document.getElementById("blue")) {
        playerScore += blueGem;
        document.getElementById("playerSC").innerHTML = playerScore;
    };
    winLoss()
}

function changePurple() {
    if (document.getElementById("purple")) {
        playerScore += purpleGem;
        document.getElementById("playerSC").innerHTML = playerScore;
    };
    winLoss()
}

function changeGreen() {
    if (document.getElementById("green")) {
        playerScore += greenGem;
        document.getElementById("playerSC").innerHTML = playerScore;
    };
    winLoss()
}

function changeIce() {
    if (document.getElementById("ice")) {
        playerScore += iceGem;
        document.getElementById("playerSC").innerHTML = playerScore;
    };
    winLoss()
}

function winLoss() {
    if (playerScore === computerScore) {
        wins++;
        document.getElementById("wins").innerHTML = ("Wins: " + wins);
        startOver();
    } else if (playerScore > computerScore) {
        losses++;
        document.getElementById("losses").innerHTML = ("Losses: " + wins);
        startOver();
    }
}

function startOver() {
    computerScore = Math.floor(Math.random() * (120 - 19)) + 19;
    document.getElementById("compScore").innerHTML = computerScore;
    blueGem = Math.floor(Math.random() * 12) + 1;
    purpleGem = Math.floor(Math.random() * 12) + 1;
    greenGem = Math.floor(Math.random() * 12) + 1;
    iceGem = Math.floor(Math.random() * 12) + 1;
    playerScore = 0;
    document.getElementById("playerSC").innerHTML = playerScore;
    winLoss()
}


console.log(computerScore);
console.log(playerScore);
console.log(blueGem);
console.log(purpleGem);
console.log(greenGem);
console.log(iceGem);



