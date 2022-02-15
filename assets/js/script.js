document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "play-game") {
                alert("You clicked Play Game!");
            } else {
                let playersChoice = this.getAttribute("data-type");

                document.getElementById("choosen-color").innerText = playersChoice;

                runGame(playersChoice);
            }
        })
    }
})


function runGame(playersChoice) {

    var ranNum = Math.floor(Math.random() * 4) + 1;
    
    console.log(ranNum);

    if (ranNum === 1) {
        var randomColor = "red";
    } else if (ranNum === 2) {
        var randomColor = "blue";
    } else if (ranNum === 3) {
        var randomColor = "green";
    } else { 
        var randomColor = "pink";
    }

    document.getElementById("pc-color").innerText = randomColor;

    console.log(randomColor)

    if (randomColor === playersChoice) {
        // alert (`You won, both you and computer picked ${playersChoice}`);
        document.getElementById("result").innerText = "You won!!!";
        incrementCorrectScore();
    } else {
        // alert (`You lost, you choice ${playersChoice} does not match the computers choice, which was ${randomColor}`);
        document.getElementById("result").innerText = "You Lost :(";
        incrementIncorrectScore();
    }
}

function checkAnswer() {

}

function incrementCorrectScore() {

    let currentScore = parseInt(document.getElementById("correct-answers").innerText);
    document.getElementById("correct-answers").innerText = ++currentScore;

}

function incrementIncorrectScore() {

    let currentScore = parseInt(document.getElementById("incorrect-answers").innerText);
    document.getElementById("incorrect-answers").innerText = ++currentScore;

}

function updateColorHistory() {

}