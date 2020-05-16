var result = document.getElementById("result");
var userScore = document.getElementById("userScore");
var compScore = document.getElementById("compScore");
var getUserScore = 0;
var getCompScore = 0;

var defaultSelection = ["Rock", "Paper", "Scissors"];
userScore.innerHTML = "0";
compScore.innerHTML = "0";
function getUserChoices(e) {
    //get the alt value so that we can compare afterwards
    var userChoice = e.alt;

    //generate random number from 0~2 to determine the computer choice
    var num = Math.floor(Math.random() * defaultSelection.length)
    var compChoice = defaultSelection[num];

    determinedResult(userChoice, compChoice);
}

function determinedResult(user, comp) {
    //concatenate 2 variable strings together for determine winner
    var checkWinner = user + comp;

    //Use switch statement to see who win the match
    switch (checkWinner) {
        case "RockScissors":
        case "PaperRock":
        case "ScissorsPaper":
            getUserScore++;
            userScore.innerHTML = getUserScore.toString();
            result.innerHTML = user + "user".fontsize(3).sub() + " and " + comp + "comp".fontsize(3).sub() + " User Win ! ! !";
            break;
        case "ScissorsRock":
        case "RockPaper":
        case "PaperScissors":
            getCompScore++;
            compScore.innerHTML = getCompScore.toString();
            result.innerHTML = user + "user".fontsize(3).sub() + " and " + comp + "comp".fontsize(3).sub() + " Computer Win ! ! !";
            break;
        case "RockRock":
        case "PaperPaper":
        case "ScissorsScissors":
            result.innerHTML = user + "user".fontsize(3).sub() + " and " + comp + "comp".fontsize(3).sub() + "It's a DRAW ! ! !";
    }
}