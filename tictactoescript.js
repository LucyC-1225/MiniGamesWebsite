let mode, player1Name, player2Name, currentTurn, modeLabel, currentTurnLabel;

function initialize() {
    mode = -1;
    modeLabel = document.getElementById("modeLabel");
    currentTurnLabel = document.getElementById("currentTurnLabel");
    img1 = document.getElementById("1");
    img2 = document.getElementById("2");
    img3 = document.getElementById("3");
    img4 = document.getElementById("4");
    img5 = document.getElementById("5");
    img6 = document.getElementById("6");
    img7 = document.getElementById("7");
    img8 = document.getElementById("8");
    img9 = document.getElementById("9");
}

function changeDisplay(buttonNum) {
    if (currentTurn === 1) {
        eval("img" + buttonNum).src = "Images/O.png";
        currentTurn = 2;
        currentTurnLabel.innerHTML = "Current Turn: " + player2Name;
    } else {
        eval("img" + buttonNum).src = "Images/X.png";
        currentTurn = 1;
        currentTurnLabel.innerHTML = "Current Turn: " + player1Name;
    }
}

function setMode(modeNum) {
    mode = modeNum;
    if (mode === 1) {
        modeLabel.innerHTML = "Current mode selected: Human Player vs AI";
    } else {
        modeLabel.innerHTML = "Current mode selected: Two Human Players";
    }
}

function startGame() {
    // check if the user has selected a mode yet
    if (mode === -1) {
        alert("Please select a mode first");
    } else {
        // AI mode
        if (mode === 1) {

        } else { // Two Player mode
            player1Name = prompt("What is player 1's name?");
            player2Name = prompt("What is player 2's name?"); //must have different names
            alert("Flipping a coin to see who goes first...");
            let randInt = getRandomInt(2);
            if (randInt === 0) {
                alert(player1Name + " goes first!");
                currentTurn = 1; //player 1 will always be O
                currentTurnLabel.innerHTML = "Current Turn: " + player1Name;
            } else {
                alert(player2Name + " goes first!");
                currentTurn = 2;
                currentTurnLabel.innerHTML = "Current Turn: " + player2Name;
            }
        }
        
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}