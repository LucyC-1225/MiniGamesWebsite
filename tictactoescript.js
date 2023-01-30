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

    mode1Button = document.getElementById("mode1Button");
    mode2Button = document.getElementById("mode2Button");
    startGameButton = document.getElementById("startGameButton");
}

function changeDisplay(buttonNum) {
    if (isGameStart) {
        if (!inputArr.includes(buttonNum)) {
            if (mode == 2) { //2 humans mode
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
            } else { //AI mode
                eval("img" + buttonNum).src = "Images/O.png";
                currentTurnLabel.innerHTML = "Current Turn: " + player2Name;
                scoreArr[buttonNum - 1] = 1;
                inputArr.push(buttonNum);
                getGameResult();
                
                //bot move
                if (isGameStart) {
                    botMove();
                }
            }
            
            getGameResult();
        }
    } else {
        alert("Please start the game first");
    }
}

function botMove() {
    setTimeout(() => {
        /* check each row, column and diagonal, if there is two 1s, or 2s, the bot will make the move there */
        let positionFound = false;
        for (let i = 0; i < 9; i+=3) {
            let negativeOneIndex = -1;
            let negativeOneCount = 0;
            let oneCount = 0;
            if (scoreArr[i] == -1) {
                negativeOneCount++;
                negativeOneIndex = i;
            }
            if (scoreArr[i + 1] == -1) {
                negativeOneCount++;
                negativeOneIndex = i + 1;
            }
            if (scoreArr[i + 2] == -1) {
                negativeOneCount++;
                negativeOneIndex = i + 2;
            }
            if (scoreArr[i] == 1) {
                oneCount++;
            }
            if (scoreArr[i + 1] == 1) {
                oneCount++;
            }
            if (scoreArr[i + 2] == 1) {
                oneCount++;
            }
            if (negativeOneCount == 1) {
                if (oneCount == 2 || oneCount == 0) {
                    eval("img" + (negativeOneIndex + 1)).src = "Images/X.png";
                    scoreArr[negativeOneIndex] = 2;
                    positionFound = true;
                    inputArr.push(negativeOneIndex + 1);
                    break;
                }
            }
        }
        if (!positionFound) {
            for (let i = 0; i < 3; i++) {
                let negativeOneIndex = -1;
                let negativeOneCount = 0;
                let oneCount = 0;
                if (scoreArr[i] == -1) {
                    negativeOneCount++;
                    negativeOneIndex = i;
                }
                if (scoreArr[i + 3] == -1) {
                    negativeOneCount++;
                    negativeOneIndex = i + 3;
                }
                if (scoreArr[i + 6] == -1) {
                    negativeOneCount++;
                    negativeOneIndex = i + 6;
                }
                if (scoreArr[i] == 1) {
                    oneCount++;
                }
                if (scoreArr[i + 3] == 1) {
                    oneCount++;
                }
                if (scoreArr[i + 6] == 1) {
                    oneCount++;
                }
                if (negativeOneCount == 1) {
                    if (oneCount == 2 || oneCount == 0) {
                        eval("img" + (negativeOneIndex + 1)).src = "Images/X.png";
                        scoreArr[negativeOneIndex] = 2;
                        positionFound = true;
                        inputArr.push(negativeOneIndex + 1);
                        break;
                    }
                }
            }
        }
        if (!positionFound) {
            let negativeOneIndex = -1;
            let negativeOneCount = 0;
            let oneCount = 0;

            if (scoreArr[0] == -1) {
                negativeOneCount++;
                negativeOneIndex = 0;
            }
            if (scoreArr[4] == -1) {
                negativeOneCount++;
                negativeOneIndex = 4;
            }
            if (scoreArr[8] == -1) {
                negativeOneCount++;
                negativeOneIndex = 8;
            }
            if (scoreArr[0] == 1) {
                oneCount++;
            }
            if (scoreArr[4] == 1) {
                oneCount++;
            }
            if (scoreArr[8] == 1) {
                oneCount++;
            }
            if (negativeOneCount == 1) {
                if (oneCount == 2 || oneCount == 0) {
                    eval("img" + (negativeOneIndex + 1)).src = "Images/X.png";
                    scoreArr[negativeOneIndex] = 2;
                    positionFound = true;
                    inputArr.push(negativeOneIndex + 1);
                }
            }
        }
        if (!positionFound) {
            let negativeOneIndex = -1;
            let negativeOneCount = 0;
            let oneCount = 0;

            if (scoreArr[2] == -1) {
                negativeOneCount++;
                negativeOneIndex = 2;
            }
            if (scoreArr[4] == -1) {
                negativeOneCount++;
                negativeOneIndex = 4;
            }
            if (scoreArr[6] == -1) {
                negativeOneCount++;
                negativeOneIndex = 6;
            }
            if (scoreArr[2] == 1) {
                oneCount++;
            }
            if (scoreArr[4] == 1) {
                oneCount++;
            }
            if (scoreArr[6] == 1) {
                oneCount++;
            }
            if (negativeOneCount == 1) {
                if (oneCount == 2 || oneCount == 0) {
                    eval("img" + (negativeOneIndex + 1)).src = "Images/X.png";
                    scoreArr[negativeOneIndex] = 2;
                    positionFound = true;
                    inputArr.push(negativeOneIndex + 1);
                }
            }
        }
        if (!positionFound) { //if there is no good move, randomize
            let numLeftArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

            console.log("Input Arr: " + inputArr);
            for (let i = 0; i < numLeftArr.length; i++) {
                if (inputArr.includes(numLeftArr[i])) {
                    console.log(i);
                    numLeftArr.splice(i, 1);
                    i--;
                }
            }
            let randIndex = numLeftArr[getRandomInt(numLeftArr.length)];
            eval("img" + (randIndex)).src = "Images/X.png";
            scoreArr[randIndex - 1] = 2;
            positionFound = true;
            inputArr.push(randIndex);
            console.log("Num Left Arr: " + numLeftArr);
        }
        currentTurnLabel.innerHTML = "Current Turn: " + player1Name;
        getGameResult();
    }, 500);
}

function getGameResult() {
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
function reset() {
    isGameStart = false;
    currentTurnLabel.innerHTML = "Current Turn: ";
    inputArr = [];
    scoreArr = [-1, -1, -1, -1, -1, -1, -1, -1, -1];
    player1Name = "";
    player2Name = "";
    mode1Button.disabled = false;
    mode2Button.disabled = false;
    startGameButton.disabled = false;
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
        /* Disable the other buttons */
        mode1Button.disabled = true;
        mode2Button.disabled = true;
        startGameButton.disabled = true;

        resetBoard();
        // AI mode
        if (mode === 1) {
            player1Name = prompt("What is your name?");
            player2Name = "AI";
            flipCoin();
            if (currentTurn == 2) {
                botMove();
            }
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