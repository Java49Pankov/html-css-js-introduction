
function checkTeudatZehut(teudatStrNumber) {
    if (teudatStrNumber.length < 9 || teudatStrNumber.length > 9) {
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

    return sum % 2 === 0;
}
console.log(checkTeudatZehut("376628202"));

function generateRandomTeudatZehut() {
    let randomNum = [];
    for (let i = 0; i < 8; i++) {
        randomNum.push(Math.round(Math.random() * 9));
    }

    randomNum[8] = 0;

    let code = [];
    code = randomNum.map(function (num, index) {
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
    do {
        randomNum[8] = randomNum[8] + 1;
    } while (sum % 2 != 0);
    console.log(sum);
    console.log(randomNum);
   
    return sum % 2 === 0;
}
console.log(generateRandomTeudatZehut());


