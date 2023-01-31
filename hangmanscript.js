let mode, mysteryWord, triesLeft, isGameStart;
outputArr = []; // _ _ _ _ is the default, each element is a h3 element, including spaces

function initialize() {
    mode = -1;
    mysteryWord = "";
    triesLeft = 8;
    isGameStart = false;

    modeLabel = document.getElementById("modeLabel");
    letterGuessesDisplay = document.getElementById("letterGuessesDisplay");
    hangmanImage = document.getElementById("hangmanImage");
    aButton = document.getElementById("aButton");
    bButton = document.getElementById("bButton");
    cButton = document.getElementById("cButton");
    dButton = document.getElementById("dButton");
    eButton = document.getElementById("eButton");
    fButton = document.getElementById("fButton");
    gButton = document.getElementById("gButton");
    hButton = document.getElementById("hButton");
    iButton = document.getElementById("iButton");
    jButton = document.getElementById("jButton");
    kButton = document.getElementById("kButton");
    lButton = document.getElementById("lButton");
    mButton = document.getElementById("mButton");
    nButton = document.getElementById("nButton");
    oButton = document.getElementById("oButton");
    pButton = document.getElementById("pButton");
    qButton = document.getElementById("qButton");
    rButton = document.getElementById("rButton");
    sButton = document.getElementById("sButton");
    tButton = document.getElementById("tButton");
    uButton = document.getElementById("uButton");
    vButton = document.getElementById("vButton");
    wButton = document.getElementById("wButton");
    xButton = document.getElementById("xButton");
    yButton = document.getElementById("yButton");
    zButton = document.getElementById("zButton");
}

function setMode(modeNum) {
    mode = modeNum;

    if (mode == 1) {
        modeLabel.innerHTML = "Current mode selected: Random Word Choice";
    } else {
        modeLabel.innerHTML = "Current mode selected: Two Players - one chooses word, the other guess"
    }
}

function startGame() {
    if (mode == -1) {
        alert("Please select a mode first!");
    } else {
        reset();
        isGameStart = true;
        if (mode == 1) {
            // choose random word from list

            alert("Guess the random word before the poor man is hanged! Good luck~");
        } else {
            mysteryWord = prompt("Player 1, what is the mystery word?");
            setDefaultOutputArr();
            alert("Player 2, guess player 1's word before the poor man is hanged! Good luck~");
            createDefaultElements();
        }
    }
}

function setDefaultOutputArr() {
    for (let i = 0; i < mysteryWord.length; i++) {
        if (mysteryWord.substring(i, i + 1) == " ") {
            outputArr.push(" ");
        } else {
            outputArr.push("_");
        }
    }
}

function reset() {
    mysteryWord = "";
    triesLeft = 8;
    removeAllCreatedh3();
    outputArr = [];
    isGameStart = false;
    aButton.disabled = false;
    bButton.disabled = false;
    cButton.disabled = false;
    dButton.disabled = false;
    eButton.disabled = false;
    fButton.disabled = false;
    gButton.disabled = false;
    hButton.disabled = false;
    iButton.disabled = false;
    jButton.disabled = false;
    kButton.disabled = false;
    lButton.disabled = false;
    mButton.disabled = false;
    nButton.disabled = false;
    oButton.disabled = false;
    pButton.disabled = false;
    qButton.disabled = false;
    rButton.disabled = false;
    sButton.disabled = false;
    tButton.disabled = false;
    uButton.disabled = false;
    vButton.disabled = false;
    wButton.disabled = false;
    xButton.disabled = false;
    yButton.disabled = false;
    zButton.disabled = false;
}

function removeAllCreatedh3() {
    for (let i = 0; i < outputArr.length; i++) {
        letterGuessesDisplay.removeChild(document.getElementById(i + "letter"));
    }
}

function updateDisplay() { //updates each of the h3 elements that has already been created
    for (let i = 0; i < outputArr.length; i++) {
        let temph3 = document.getElementById(i + "letter");
        temph3.innerHTML = outputArr[i];
        if (outputArr[i] == "_") {
            temph3.innerHTML = " ";
        }
        if (outputArr[i] == " ") {
            temph3.style.border = "none";
        }
    }
}

function createDefaultElements() {
    for (let i = 0; i < outputArr.length; i++) {
        let temph3 = document.createElement("h3");
        temph3.innerHTML = outputArr[i];
        temph3.className = "letterItems";
        temph3.id = (i) + "letter";
        letterGuessesDisplay.appendChild(temph3);
        if (outputArr[i] == "_") {
            temph3.innerHTML = " ";
        }
        if (outputArr[i] == " ") {
            temph3.style.border = "none";
        }
    }
}

function checkLetter(chosenLetter) {
    if (isGameStart) {
        if (mysteryWord.indexOf(chosenLetter) == -1) {
            triesLeft--;
            hangmanImage.src = "Images/hangman" + (8 - triesLeft) + ".png";
        } else {
            for (let i = 0; i < mysteryWord.length; i++) {
                if (mysteryWord.substring(i, i + 1) == chosenLetter) {
                    outputArr[i] = chosenLetter;
                }
            }
            updateDisplay();
        }
        eval(chosenLetter + "Button").disabled = true;
        checkWin();
    }
}

function checkWin() {
    if (triesLeft == 0) {
        alert("NoOOooooOOOoo, player 2, you failed to save the man :(");
        isGameStart = false;
    } else {
        let outputStr = "";
        for (let i = 0; i < outputArr.length; i++) {
            outputStr += outputArr[i];
        }
        if (outputStr == mysteryWord) {
            alert("Yayyyy the man is saved!");
            isGameStart = false;
        }
    }
}