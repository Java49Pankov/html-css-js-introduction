//conversion from Morse code to number
// symbol "." -> 0  "-" -> 1
function fromMorseToNumber(morseCode) {
    let result = 0;
    for (let i = 0; i < morseCode.length; i++) {
        let code = morseCode[i] == "." ? 0 : 1;
        result = result * 2 + code;
    }
    return result;
}
console.log(fromMorseToNumber("-.-....-.---...-.-")); // =>165317

//conversion from Number  to morse code
function fromNumberToMorse(number) {
    number = Math.abs(number);
    let res = "";
    do {
        let digit = number % 2;
        let sym = digit == 0 ? "." : "-";
        res = sym + res;
        number = Math.trunc(number / 2);
    } while (number != 0);
    return res;
}
console.log(fromNumberToMorse(165317)); // => -.-....-.---...-.-

//=======================================
function getSymbol(digit) {
    let codeA = 'a'.charCodeAt();
    if (digit > 9) {
        digit = String.fromCharCode(codeA + digit - 10);
    }
    return digit;
    // return digit < 10 ? digit : String.fromCharCode(codeA + digit - 10);
}

function fromNumberToString(number, base) {
    number = Math.abs(number);
    let res = "";
    do {
        let digit = number % base;
        let sym = getSymbol(digit);
        res = sym + res;
        number = Math.trunc(number / base);
    } while (number != 0);
    return res;
}
console.log(fromNumberToString(900550, 36)); // java

//============================================

function getDigit(symbol) {
    let codeA = 'a'.charCodeAt();
    let res = symbol < '9' ? + symbol : symbol.charCodeAt() - codeA + 10;
    return res;
}

function fromStringToNumber(string, base) {
    string = string.toLowerCase();
    let result = 0;
    for (let i = 0; i < string.length; i++) {
        let digit = getDigit(string[i]);
        result = result * base + digit;
    }
    return result;
}
console.log(fromStringToNumber("java", 36)); //900550
