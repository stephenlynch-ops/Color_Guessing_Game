/**
 * Loads once the DOM has loaded. Collects data from the color
 * button that the user clicks and then starts the runGame function.
 */
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

/**
 * Generates a random number between 1 and 4, then converts it to a colour
 * based on the if / else if statements below.
 * It then compares the choosen player colour, which comes from the data-type
 * of the button the user clicks.
 * Depending on this comparison it then returns a result.
 */
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
        document.getElementById("result").innerText = "You won!!!";
        incrementCorrectScore();
    } else {
        document.getElementById("result").innerText = "You Lost :(";
        incrementIncorrectScore();
    }
}

/**
 * Updates the correct score in the scores section based on the last
 * round of guessing - if the user guesses the correct color.
 */
function incrementCorrectScore() {

    let currentScore = parseInt(document.getElementById("correct-answers").innerText);
    document.getElementById("correct-answers").innerText = ++currentScore;

}

/**
 * Updates the incorrect score in the scores section based on the last
 * round of guessing - if the user guesses the wrong color.
 */
function incrementIncorrectScore() {

    let currentScore = parseInt(document.getElementById("incorrect-answers").innerText);
    document.getElementById("incorrect-answers").innerText = ++currentScore;

}

/**
 * This takes the computers past colour selections and plots them in a graph
 * for the user to use in order to have a better chance of winning (maybe).
 */
function updateColorHistory() {

}