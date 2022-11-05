
//========Teacher code=====================================
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

//=========Teacher code==============================================

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

//================================================================

function fromNumberToString(number, base) {
    number = Math.abs(number);
    base = Math.abs(base);
    let res = '';
    do {
        let digit = number % base;
        if (digit >= 10) {
            digit = digit + 87;
        } else if (digit < 10) {
            digit = digit + 48;
        }
        let sym = String.fromCharCode(digit);
        res = sym + res;
        number = Math.trunc(number / base);
    } while (number != 0);
    return res;
}
console.log(fromNumberToString(900550, 36));
console.log(fromNumberToString(-900550, 36));
console.log(fromNumberToString('900550', 36));
console.log(fromNumberToString(900550, -36));
console.log(fromNumberToString(900550, '36'));
console.log(fromNumberToString(46016237, 36));
console.log(fromNumberToString(11483, 2));

//===========================================================================

function fromStringToNumber(string, base) {
    base = Math.abs(base);
    let res = 0;
    for (let i = 0; i < string.length; i++) {
        let code = string[i].charCodeAt();
        if (base == 2) {
            code = string[i] == 0 ? 0 : 1;
        } else if (code >= 10) {
            code = code - 87;
        } else if (code < 10) {
            code = code - 48;
        }
        res = res * base + code;
    }
    return res;
}
console.log(fromStringToNumber('java', 36));
console.log(fromStringToNumber('java', -36));
console.log(fromStringToNumber('react', 36));
console.log(fromStringToNumber('10110011011011', 2));

//=======================================================================

function fromNumberToString1(number, base) {
    number = Math.abs(number);
    base = Math.abs(base);
    let res = '';
    do {
        let digit = number % base;
        let sym = digit.toString(base);
        res = sym + res;
        number = Math.trunc(number / base);
    } while (number != 0);
    return res;
}
console.log(fromNumberToString1(900550, 36));
console.log(fromNumberToString1(46016237, 36));
console.log(fromNumberToString1(11483, 2));
