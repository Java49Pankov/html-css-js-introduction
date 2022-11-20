/**
1. Write application – game for guessing word similar to the television program “Marvels Field”
1.1. The application should present HTML element for inputting a word guess
1.2. The application should present the elements as many as the number of letters of being
guessed word.
1.2.1. Each element should present an appropriate letter of being guessed
word with the same background and font colors, so the letter won’t be seen
1.3. The applicati on should present a question text related to being guessed word. For
example, unseen letters of word: s t r i n g, question: JavaScript Data Type
1.4. The application should allow the user to type a word guess and hit “enter” key
1.5. The application should take the typed word, analyze it and update the background of
the letters in the being guessed word for making them seen
1.6. The application should allow the user to play again only after guessing the word
1.6.1. New game should present new word with a proper question
1.6.1.1. Random word from the existing ones occasionally may be the
same as the previous one. The application should prevent it happening.
However, it’s possible if word X follows word Y and after word X there
will be again word Y */


//Configuration
const words = ["Messi", "Germany", "France",
    "unknown", "Israel"]
const questions = ["best player on Mondeal 2014",
    "country champion in mondeal 2014", "country champion in mondeal 2018",
    "country champion in mondeal 2022",
    "country that does not participate in Mondeal 2022"];
/******************************************* */
//DOM elements
const sectionElement = document.querySelector(".word-guess")
const inputElement = document.querySelector("input");
const playAgainElement = document.getElementById("play-again");
const overGameMessageElement = document.querySelector(".game-over-message");
const questionElement = document.getElementById("question");
const guessMessageElement = document.getElementById("guess-message");
let lettersElements;
/****************************************************** */
//variable seen from all functions
let word;
let trials = 0;
let previousIndex = questions.length;
//functions
//action functions
function startGame() {
    inputElement.value = '';
    inputElement.disabled = false;
    const index = getIndex();
    questionElement.innerHTML = questions[index];
    word = words[index];
    sectionElement.innerHTML = getLetterDivs();
    lettersElements = document.querySelectorAll(".letter-guess");
    word = word.toLowerCase();
    playAgainElement.style.display = 'none';
    overGameMessageElement.innerHTML = '';
    guessMessageElement.innerHTML = '';

    trials = 0;
}
function onWordTyped() {
    const wordTyped = inputElement.value.toLowerCase();
    trials++;
    if (wordTyped.length != word.length) {
        alert(`word should have ${word.length} letters`)
    } else {
        let guessedLetters = 0;
        lettersElements.forEach((element, i) => {
            if (wordTyped[i] == element.innerHTML.toLowerCase()) {
                element.style.background = "white";
                guessedLetters++;
            }
        });
        guessMessageElement.innerHTML =
         `you have guessed ${guessedLetters == wordTyped.length ? 'all':guessedLetters} letters`;

        if (wordTyped == word) {
            endGame();
        } 
    }
}
function endGame() {
    overGameMessageElement.innerHTML = `you have used ${trials} guess trials`;
    playAgainElement.style.display = "block";
    inputElement.disabled = true;
}
/************************************************ */
//additional functions
function getLetterDivs() {
    const wordArray = Array.from(word);
    const res = wordArray.map(letter => `<div class="letter-guess">${letter}</div>`);
    return res.join('');
}
function getIndex() {
    let res; 
    do {
        res = Math.floor(Math.random() * questions.length); 
    }while(res == previousIndex);
    return res;
}
startGame();


