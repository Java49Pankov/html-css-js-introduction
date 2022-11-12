/*
function checkTeudatZehut(teudatStrNumber){
    //TODO
    control sum of for even index digit value, for odd index digit * 2
    contril sum should be divide on 10 with no remainder
    example 123456782 => 1 + 4 + 3 + 8 + 5 + 3 + 7 + 7 + 2 = 40 => true
            123456783 => 1 + 4 + 3 + 8 + 5 + 3 + 7 + 7 + 3 = 41 => false
}*/

function checkTeudatZehut(teudatStrNumber) {
    let res = false;
    if (teudatStrNumber.length == 9 && !isNaN(teudatStrNumber)) {
        let arrayForSum = getArrayForSum(teudatStrNumber);
        let sum = getSum(arrayForSum);
        res = sum % 10 == 0;
    }
    return res;
}

function getSum(array) {
    return array.reduce(function (prev, current) {
        return prev + current;
    }, 0);
}

function getNumberOddIndex(element) {
    let res = element * 2;
    if (res > 9) {
        res -= 9;
    }
    return res;
}

function getCurrentNumber(element, index) {
    return index % 2 == 0 ? +element : getNumberOddIndex(element);
}

function getArrayForSum(teudatStrNumber) {
    let array = Array.from(teudatStrNumber);
    return array.map(getCurrentNumber);
}

console.log(checkTeudatZehut("346608201"));
['346608201', '1234', 'abcd123', '123456783'].forEach(function (e) {
    console.log(`teudat zehut: ${e}, return of the method checkTeudatZehut: ${checkTeudatZehut(e)}`)
});

//=============Vebinar cod====================

const nineDigits = "012345678";
const minDigit = 0;
const maxDigit = 9;
const char0 = '0'.charCodeAt();
function checkTeudatZehut1(tzStr) {
    if (tzStr.length != nineDigits.length || isNaN(+tzStr)) {
        console.log("TZ=", tzStr, 'valid=', false);
        return false;
    }
    let ctrlSum = getControlSum(tzStr);
    let valid = ctrlSum % 10 == 0;
    console.log("TZ=", tzStr, "ctrlSum=", ctrlSum, 'valid=', valid);
    return valid;
}
function getControlSum(tzStr) {
    /*
    let array = Array.from(tzStr).map(function(symbol, ind) {
        let value = symbol.charCodeAt() - char0;
        return ind % 2 == 0 ? getEvenValue(value) : getOddValue(value*2);
    });
    return array.reduce(function(sum, cur) {
        return sum+cur;
    }, 0);
    */
    return Array.from(tzStr).map(function (symbol, ind) {
        let value = symbol.charCodeAt() - char0;
        return ind % 2 == 0 ? getEvenValue(value) : getOddValue(value * 2);
    }).reduce(function (sum, cur) {
        return sum + cur;
    }, 0);
}
function getOddValue(number) {
    return number < 10 ? number : number % 10 + Math.trunc(number / 10);
}
function getEvenValue(number) {
    return number;
}
//====================================================================
/*
function generateRandomTeudatZehut() {
     //TODO
     return string of 9 symbols matching checkTeudatZehut
     make 8 random digits from 0 to 9
     9 - th symol should be with accordance of mathing
     to get random digit Math.round(Math.random() * 9)
}
*/

function generateTeudatZehut() {
    let array = getGeneratedArray();
    array[8] = updateCtrlDigit(array);
    if (!checkTeudatZehut1(integerArray2String(array))) {
        console.log('Generation failed');
    }
}
function getGeneratedArray() {
    return Array.from(nineDigits).map(function (symbol, ind) {
        let value = (ind == 8) ? 0 : getRandomIntegerValue(minDigit, maxDigit + 1);
        return ind % 2 == 0 ? getEvenValue(value) : getOddValue(value * 2);
    });
}
function integerArray2String(array) {
    return array.reduce(function (str, cur) {
        return str + String.fromCharCode(cur + char0);
    }, "");
}
function updateCtrlDigit(array) {
    let sum = getControlSum(integerArray2String(array));
    let roundedSum = Math.floor(sum / 10) * 10;
    if (roundedSum === sum) {
        return 0;
    }
    return roundedSum + 10 - sum;
}
function getRandomIntegerValue(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    // The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min) + min);
}
// Tests
checkTeudatZehut1('311769103');
checkTeudatZehut1('311769129');
checkTeudatZehut1('311759129');
checkTeudatZehut1('336097183');
checkTeudatZehut1('33609183');
checkTeudatZehut1('33609as83');
checkTeudatZehut1('012345674');
generateTeudatZehut();