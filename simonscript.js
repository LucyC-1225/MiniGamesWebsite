currentPatternArr = [];
//what the user inputs after the pattern is lit up
currentUserPatternArr = [];
let roundNumber;

function initialize() {
    roundNumber = 1;
    countLabel = document.getElementById("countLabel");
    simonbutton1 = document.getElementById("simonbutton1");
    simonbutton2 = document.getElementById("simonbutton2");
    simonbutton3 = document.getElementById("simonbutton3");
    simonbutton4 = document.getElementById("simonbutton4");
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

async function addToPattern() {
    currentPatternArr.push(getRandomInt(4) + 1);
    await displayAllPatterns();
    //TO DO: this should only execute after the displayAllPatterns function is done
    simonbutton1.disabled = false;
    simonbutton2.disabled = false;
    simonbutton3.disabled = false;
    simonbutton4.disabled = false;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//loops through currentPatternArr and 'lights up' the corresponding button
function displayAllPatterns() {
    console.log(currentPatternArr);
    simonbutton1.disabled = true;
    simonbutton2.disabled = true;
    simonbutton3.disabled = true;
    simonbutton4.disabled = true;

    for (let i = 0; i < currentPatternArr.length; i++) {
        let currentButton = eval("simonbutton" + currentPatternArr[i]);
        setTimeout(() => {
            setTimeout(() => {
                currentButton.classList.add("glow");
            }, parseInt((i + 1) + "000") / 2);
            setTimeout(() => {
                currentButton.classList.remove("glow");
            }, parseInt((i + 2) + "000") / 2);
        }, parseInt((i + 1) + "000") / 2);
    }
}

function reset() {
    roundNumber = 1;
    currentPatternArr = [];
    currentUserPatternArr = [];
    countLabel.innerHTML = "Current round: 1";
}