const words = ["syntax", "loop", "array"];
const questions = ["Is the set of rules, how JavaScript programs are constructed", "Can execute a block of code a number of times.",
    "Is a special variable, which can hold more than one value"];
let INDEX;
let WORDFIELD;
const N_LETTERS = '';
const sectionElement = document.querySelector(".word-guess");
const divQuestion = document.querySelector(".question-guess");
let letterElements;
const gameOverElement = document.querySelector(".game-over-message");
const playAgainElement = document.getElementById("play-again");

playAgainElement.addEventListener('click', startGame);

function startGame() {
    gameOverElement.innerHTML = '';
    sectionElement.innerHTML = getDivsElements();
    letterElements = document.querySelectorAll(".letter-guess");
    console.log("startGame");
}

function getDivsElements() {
    INDEX = Math.floor(Math.random() * words.length);
    WORDFIELD = words[INDEX];
    divQuestion.innerHTML = questions[INDEX];
    let wordFieldAr = Array.from(WORDFIELD);
    let res = wordFieldAr.map(letter => `<div class ="letter-guess">${letter}</div>`);
    return res.join('');
}

function onChange(event) {
    const wordGuess = event.target.value;
    event.target.value = '';
    const wordAr = Array.from(wordGuess);
    const colors = wordAr.map((l, i) => {
        let res = "";
        if (l == WORDFIELD[i]) {
            res = "white"
        }
        return res;
    })
    colors.forEach((c, i) => {
        console.log(colors, letterElements);
        if (letterElements[i].style.background != 'white') {
            letterElements[i].style.background = c
        }
    });
    const res = wordGuess == WORDFIELD;
    endGame(res);
}

function endGame(value) {
    if (value) {
        gameOverElement.innerHTML = "Congratulations you are winner";
        gameOverElement.style.color = "green"
    }
    playAgainElement.style.display = 'block';
}

startGame();
