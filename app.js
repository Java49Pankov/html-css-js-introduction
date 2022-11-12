console.log("Hello world");

/*
for (var i = 0; i < 3; i++) {
    setTimeout(function () { console.log(i) });
} // =>3 3 3


for (let i = 0; i < 3; i++) {
    setTimeout(function () { console.log(i) });
} // => 0 1 2

//----------------------------------------------------

for (var i = 0; i < 3; i++) {
    console.log(i); // => 0 1 2
}
console.log(i); // => 3
*/

//-----------------------------------------------------

function sum(op1, op2) {
    let res = op1 + op2;
    return res;
}
console.log(sum(10, 20));

//-----------------------------------------------------

function sumDigits(number) {
    //compute sum of digits for the intenger numbers
    // if (number < 0) {
    //     number = -number;
    //}
    number = Math.abs(number);
    number = Math.trunc(number); // get rid of the fractional part
    let sum = 0;
    do {
        let rem = number % 10;
        sum += rem;
        number = (number - rem) / 10;
        // number = Math.floor(number / 10);
    } while (number != 0);
    return sum;
}
console.log(sumDigits(-643.876));

//---------------------------------------------------------

/***********CW #12***************/
let strNum1 = "123";
let strNum2 = "9";
console.log(strNum1 + strNum2); // => '1239' -string
console.log(strNum1 - strNum2); // => 114
console.log(strNum1 > strNum2); // => false

// conversions from string to number
let num1 = +strNum1;
let num2 = +strNum2;
console.log(num1 + num2); // => 132
console.log(num1 - num2); // => 114
console.log(num1 > num2); // => true

let strNumStr = "123.7ab";
let numStr = +strNumStr;
console.log(numStr); // => NaN - not fail. Not a Number is a number that is not a legal number. 
let num = parseInt(strNumStr);
let num3 = parseFloat(strNumStr);
console.log(num); // => 123;
console.log(num3); // => 123.7

//this's the wrong check:

if (numStr == NaN) {
    console.log("numStr is NaN");
}
// this check is Ok:
if (isNaN(numStr)) {
    console.log("numStr is NaN");
}

let num10 = 77;
let strNum10 = "" + num10;
console.log(strNum10); // => "123" - string 10
let strNum16 = num10.toString(16);
console.log(strNum16); // => "7b" - string 16 hexadecimal

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
// --------------------------------------------------------

// getting code from symbol
console.log('a'.charCodeAt(0));
// getting symbol from code
console.log(String.fromCharCode(97));

// --------------------PATTERN------HW12-----------------
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
console.log(fromNumberToString(900550, 36));

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
console.log(fromStringToNumber("java", 36));


