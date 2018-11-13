var computerScore = Math.floor(Math.random() * (120 - 19)) + 19;
var blueGem = Math.floor(Math.random() * 12) + 1;
var purpleGem = Math.floor(Math.random() * 12) + 1;
var greenGem = Math.floor(Math.random() * 12) + 1;
var iceGem = Math.floor(Math.random() * 12) + 1;
var playerScore = 0;
var wins = 0;
var losses = 0;




$(document).ready(function () {
    $("#compScore").html(computerScore);
    $("#wins").html("Wins: " + wins);
    $("#losses").html("Losses: " + losses);
    $("#blue").click(function () {
        playerScore += blueGem;
        $("#playerSC").html(playerScore);
        winLoss()
    });
    $("#purple").click(function () {
        playerScore += purpleGem;
        $("#playerSC").html(playerScore);
        winLoss()
    });
    $("#green").click(function () {
        playerScore += greenGem;
        $("#playerSC").html(playerScore);
        winLoss()
    });
    $("#ice").click(function () {
        playerScore += iceGem;
        $("#playerSC").html(playerScore);
        winLoss()
    });
    function winLoss() {
        if (playerScore === computerScore) {
            wins++;
            $("#wins").html("Wins: " + wins);
            $("#message").show("You Win!")
            startOver();
        } else if (playerScore > computerScore) {
            losses++;
            $("#losses").html("Losses: " + losses);
            $("#message").show("You Lose!")
            startOver();
        }
    }
    function startOver() {
        computerScore = Math.floor(Math.random() * (120 - 19)) + 19;
        $("#compScore").html(computerScore);
        blueGem = Math.floor(Math.random() * 12) + 1;
        purpleGem = Math.floor(Math.random() * 12) + 1;
        greenGem = Math.floor(Math.random() * 12) + 1;
        iceGem = Math.floor(Math.random() * 12) + 1;
        playerScore = 0;
        $("#playerSC").html(playerScore);
        winLoss()
    }
});





console.log(computerScore);
console.log(playerScore);
console.log(blueGem);
console.log(purpleGem);
console.log(greenGem);
console.log(iceGem);



