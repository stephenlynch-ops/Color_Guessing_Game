document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "play-game") {
                alert("You clicked Play Game!");
            } else {
                let playersChoice = this.getAttribute("data-type");
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

    console.log(randomColor)

    if (randomColor === playersChoice) {
        alert (`You won, both you and computer picked ${playersChoice}`);
    } else {
        alert (`You lost, you choice ${playersChoice} does not match the computers choice, which was ${randomColor}`);
    }
}

function convertNumberToColor() {

}

function checkAnswer() {

}

function incrementCorrectScore() {

}

function incrementIncorrectScore() {

}

function updateColorHistory() {

}