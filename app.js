// console.log("Hello world");

/*
for (var i = 0; i < 3; i++) {
    setTimeout(function () { console.log(i) }); 
} // =>3 3 3

for (let i = 0; i < 3; i++) {
    setTimeout(function () { console.log(i) });
} // => 0 1 2
*/

/*
for (var i = 0; i < 3; i++) {
    console.log(i); // => 0 1 2
}
console.log(i); // => 3
*/

// function sum(op1, op2) {
//     let res = op1 + op2;
//     return res;
// }
// console.log(sum(10, 20));


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

