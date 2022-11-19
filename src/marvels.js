const words = ["syntax", "loop", "array"];
const questions = ["Is the set of rules, how JavaScript programs are constructed", "Can execute a block of code a number of times.",
    "Is a special variable, which can hold more than one value"];
let index = 0;
let wordField;
let countLetter = 0;
let wordFieldAr;
let letterElements;
let prevInd = -1;
const sectionElement = document.querySelector(".word-guess");
const divQuestion = document.querySelector(".question-guess");
const gameOverElement = document.querySelector(".game-over-message");
const playAgainElement = document.getElementById("play-again");

function startGame() {
    gameOverElement.innerHTML = '';
    sectionElement.innerHTML = getDivsElements();
    letterElements = document.querySelectorAll(".letter-guess");
}

function getDivsElements() {
    index = getIndex();
    wordField = words[index];
    divQuestion.innerHTML = questions[index];
    wordFieldAr = Array.from(wordField);
    let res = wordFieldAr.map(letter => `<div class ="letter-guess">${letter}</div>`);
    return res.join('');
}

function getIndex() {
    index = Math.floor(Math.random() * words.length);
    while (prevInd == index) {
        index = Math.floor(Math.random() * words.length);
    }
    prevInd = index;
    console.log(prevInd);
    return index;
}

function onChange(event) {
    const wordGuess = event.target.value;
    event.target.value = '';
    const wordAr = Array.from(wordGuess);
    const colors = wordFieldAr.map((letter) => {
        return wordAr.includes(letter) ? "white" : "black";
    });
    colors.forEach((color, index) => {
        if (color == "white") {
            if (letterElements[index].style.background != 'white') {
                countLetter++;
                letterElements[index].style.background = color
            }
        }
    });
    if (countLetter == wordFieldAr.length) {
        endGame(true);
    }
}

function endGame(value) {
    if (value) {
        gameOverElement.innerHTML = "Congratulations you are winner";
        gameOverElement.style.color = "green"
    }
    playAgainElement.style.display = 'block';
    countLetter = 0;
}

startGame();
