document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons){
        button.addEventListener("click", function() {
            if (this.getAttribute("data-type") === "play-game") {
                alert("You clicked Play Game!");
            } else {
                let playersChoice = this.getAttribute("data-type");
                alert(`You clicked ${playersChoice}!`);
            }
        })
    }
})


function runGame() {

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