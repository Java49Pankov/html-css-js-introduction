//=========My code====================
function checkTeudatZehut(teudatStrNumber) {
    if (teudatStrNumber.length != 9) {
        return false;
    }

    let arNum = Array.from(teudatStrNumber);
    let arCode = [];

    arCode = arNum.map(function (num, index) {
        let digit = +num;
        let res = 0;
        if (index % 2 !== 0) {
            res = digit * 2;
            if (res > 9) {
                res -= 9;
            }
        } else {
            res = digit;
        }
        return res;
    });
    console.log(arCode);

    let sum = arCode.reduce(function (previos, current) {
        return previos + current;
    }, 0);
    console.log(sum);

    return sum % 10 === 0;
}
console.log('Result = ', checkTeudatZehut("376628202"));
//=====================================================================
function generateRandomTeudatZehut() {
    let randomArr = [];
    for (let i = 0; i < 8; i++) {
        randomArr.push(Math.round(Math.random() * 9));
    }
    randomArr[8] = 0;

    let code = [];
    code = randomArr.map(function (num, index) {
        let digit = +num;
        let res = 0;
        if (index % 2 !== 0) {
            res = digit * 2;
            if (res > 9) {
                res -= 9;
            }
        } else {
            res = digit;
        }
        return res;
    });
    console.log(code);

    let sum = code.reduce(function (prev, current) {
        return prev + current;
    }, 0);
    if (sum % 10 !== 0) {
        let randomNum = Math.floor(sum / 10) * 10;
        if (randomNum !== sum) {
            console.log(randomNum);
            randomArr[8] = randomNum + 10 - sum;
        }
    }

    return sum % 10 !== 0;
}
console.log("result = ", generateRandomTeudatZehut());

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