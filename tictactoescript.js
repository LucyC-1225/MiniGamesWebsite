let mode, player1Name, player2Name, currentTurn, modeLabel, currentTurnLabel, isGameStart;
inputArr = [];
scoreArr = [-1, -1, -1, -1, -1, -1, -1, -1, -1];

function initialize() {
    mode = -1;
    isGameStart = false;
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
    if (isGameStart) {
        if (!inputArr.includes(buttonNum)) {
            if (currentTurn === 1) {
                eval("img" + buttonNum).src = "Images/O.png";
                currentTurn = 2;
                currentTurnLabel.innerHTML = "Current Turn: " + player2Name;
                scoreArr[buttonNum - 1] = 1;
            } else {
                eval("img" + buttonNum).src = "Images/X.png";
                currentTurn = 1;
                currentTurnLabel.innerHTML = "Current Turn: " + player1Name;
                scoreArr[buttonNum - 1] = 2;
            }
            inputArr.push(buttonNum);
            
            // check if anyone has won yet
            let winner = checkWin();
            if (winner === 1) {
                alert("Congrats!!!! " + player1Name + " has won!");
                reset();
            } else if (winner === 2) {
                alert("Congrats!!!! " + player2Name + " has won!");
                reset();
            } else if (winner === 3) {
                alert("It is a tie!");
                reset();
            }
        }
    } else {
        alert("Please start the game first");
    }
}

function reset() {
    isGameStart = false;
    currentTurnLabel.innerHTML = "Current Turn: ";
    inputArr = [];
    scoreArr = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
    player1Name = "";
    player2Name = "";
}
// returns the player that won (1 or 2) or -1 if no win yet or 3 if it is a tie
function checkWin() {
    /*
    | 1 | | 2 | | 3 |
    | 4 | | 5 | | 6 |
    | 7 | | 8 | | 9 |
    */
   //rows
   if (scoreArr[0] == scoreArr[1] && scoreArr[1] == scoreArr[2]) {
    return scoreArr[0];
   } else if (scoreArr[3] == scoreArr[4] && scoreArr[4] == scoreArr[5]) {
    return scoreArr[3];
   } else if (scoreArr[6] == scoreArr[7] && scoreArr[7] == scoreArr[8]) {
    return scoreArr[6];
   } else if (scoreArr[0] == scoreArr[3] && scoreArr[3] == scoreArr[6]) { //columns
    return scoreArr[0];
   } else if (scoreArr[1] == scoreArr[4] && scoreArr[4] == scoreArr[7]) {
    return scoreArr[1];
   } else if (scoreArr[2] == scoreArr[5] && scoreArr[5] == scoreArr[8]) {
    return scoreArr[2];
   } else if (scoreArr[0] == scoreArr[4] && scoreArr[4] == scoreArr[8]) { //diagonal
    return scoreArr[0];
   } else if (scoreArr[2] == scoreArr[4] && scoreArr[4] == scoreArr[6]) { //diagonal
    return scoreArr[2];
   } else if (inputArr.length == 9) { //tie
    return 3;
   } else {
    return -1;
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
        isGameStart = true;
        resetBoard();
        // AI mode
        if (mode === 1) {
            player1Name = prompt("What is your name?");
            player2Name = "AI";
            flipCoin();
        } else { // Two Player mode
            player1Name = prompt("What is player 1's name?");
            player2Name = prompt("What is player 2's name?"); //must have different names
            flipCoin();
        }
    }
}

function flipCoin() {
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

function resetBoard() {
    for(let i = 1; i <= 9; i++) {
        eval("img" + i).src = "Images/blank.png";
    }   
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}