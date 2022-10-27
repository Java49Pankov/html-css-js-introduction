// console.log("Hello world");
// for (var i = 0; i < 3; i++) {
//     setTimeout(function () { console.log(i) }); 
// } =>3 3 3

// for (let i = 0; i < 3; i++) {
//     setTimeout(function () { console.log(i) });
// } => 0 1 2

// for (var i = 0; i < 3; i++) {
//     console.log(i);
// }
// console.log(i);

// function sum(op1, op2) {
//     let res = op1 + op2;
//     return res;
// }
// console.log(sum(10, 20));

function sumDigits(num) {
    let sum = 0;
    while (num) {
        let rem = num % 10;
        sum += rem;
        num = (num - rem) / 10;
    }
    return sum;
}
console.log(sumDigits(123));

function digitsSum(number) {
    if (number < 0) {
        number = -number;
    }
    let sum = 0;
    let rem = 0;
    do {
        rem = number % 10;
        sum += rem;
        number = (number - rem) / 10;
    } while (number != 0);
    return sum;
}
console.log(digitsSum(-641));