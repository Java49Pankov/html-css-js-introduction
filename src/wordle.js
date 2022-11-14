const WORD = "pappy";
const N_LETTERS = 5;
const letterElements = document.querySelectorAll(".letter-guess");
const lableWin = document.querySelector(".lable-win");
const guessSection = document.querySelector('.word-guess');
const lableLose = document.querySelector('.lable-lose');
const moveScore = document.querySelector('.move-score');
let TRAILS = 6;
const HIDDEN = "hidden";

function onChange(event) {
    const wordGuess = event.target.value;
    event.target.value = '';
    if (wordGuess.length != N_LETTERS) {
        alert(`A WORD should contain ${N_LETTERS} letters`)
    } else {
        const wordAr = Array.from(wordGuess);
        wordAr.forEach((l, i) => letterElements[i].innerHTML = l);
        lableWin.classList.add(HIDDEN);
        TRAILS--;
        const colors = wordAr.map((l, i) => {
            let index = WORD.indexOf(l);
            let res = 'red';
            if (index > -1) {        
                //Tried to compare letters in words with the same index. it worked        
                res = l == WORD[i] ? 'green' : 'yellow'; 
               
                //here we compare the index themselves. ind[2] != ind[0] 
                // res = index == i ? 'green' : 'yellow';
            }
            return res;
        })
        colors.forEach((c, i) => letterElements[i].style.color = c);
        checkWord(wordGuess);
        moveScores();
    }
}

function checkWord(wordGuess) {
    if (wordGuess == WORD) {
        lableWin.classList.remove(HIDDEN);
        TRAILS = 6;
    }
}

function moveScores() {
    if (TRAILS == 0) {
        lableLose.classList.remove(HIDDEN);
    }
    moveScore.innerText = `Remaining tries = ${TRAILS} Try again`;
}




