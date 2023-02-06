currentPatternArr = [];
//what the user inputs after the pattern is lit up
currentUserPatternArr = [];
let roundNumber;

function initialize() {
    roundNumber = 1;
    countLabel = document.getElementById("countLabel");
}

function checkButton(buttonNum) {
    if (currentPatternArr[currentUserPatternArr.length] == buttonNum) {
        currentUserPatternArr.push(buttonNum);
        if (currentPatternArr.length == currentUserPatternArr.length) {
            roundNumber++;
            countLabel.innerHTML = "Current round: " + roundNumber;
            currentUserPatternArr = [];
            addToPattern();
        }
    } else {
        alert("Game over! You lasted " + roundNumber + " rounds!");
    }
}

function startGame() {
    reset();
    alert("Buttons will light up in a specific pattern. Copy the pattern after its done. How far can you go?");
    addToPattern();
}

function addToPattern() {
    currentPatternArr.push(getRandomInt(4) + 1);
    displayAllPatterns();
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//loops through currentPatternArr and 'lights up' the corresponding button
function displayAllPatterns() {
    console.log(currentPatternArr);
}

function reset() {
    roundNumber = 1;
    currentPatternArr = [];
    currentUserPatternArr = [];
    countLabel.innerHTML = "Current round: 1";
}