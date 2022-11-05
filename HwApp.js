
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
            randomArr[8] = randomNum + 10 - sum;
        }
    }

    return sum % 10 !== 0;
}
console.log(generateRandomTeudatZehut());


