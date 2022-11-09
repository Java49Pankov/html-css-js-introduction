
//==================CW #13=============================
let ar = [];
ar[10000] = 100;
ar[1] = [1, 2, 3];
console.log("length of array = ", ar.length);
ar[0] = "hello";
console.log("10000- th element = ", ar[10000]);
console.log("0 - th element = ", ar[0]);
console.log("1-th element = ", ar[1]);
//-------------------------------------------------
let str = 'Hello';
let arStr = Array.from(str); //getting array of the string`s symbols
console.log("String 'Hello' -> array is ", arStr);
// professional not used "for" for seeks element at index
for (let i = 0; i < arStr.length; i++) {
    console.log("element at index ", i, arStr[i]);
}
// they used forEach:
function printLn(element, index, array) {
    console.log("element at index ", index, element);
}
arStr.forEach(printLn);
//------------------------------------------------------
//from array to the code ascii:
let arCodeAscii = arStr.map(function (symbol) {
    return symbol.charCodeAt();
})
console.log(arCodeAscii);

let arCode_Ascii = arStr.map(function (symbol, index) {
    return index % 2 == 0 ? symbol.charCodeAt() : symbol;
})
console.log(arStr, arCode_Ascii);

let sumAscii = arStr.reduce(function (res, cur) {
    return res + cur.charCodeAt();
}, 0)
console.log("sum of ascii ", sumAscii);
console.log(arStr.reduce(function (res, cur) {
    return res + cur;
}, ""));

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

/*
function generateRandomTeudatZehut() {
     //TODO
     return string of 9 symbols matching checkTeudatZehut
     make 8 random digits from 0 to 9
     9 - th symol should be with accordance of mathing
     to get random digit Math.round(Math.random() * 9)
}

*/
//===================CW14=====HW14========================


/*1. Write function ulSurround that surrounds array of strings inside <ul></ul>
element.
1.1 Example of input array let strings=["abc","lmn","cd"]
1.2 Output array for the above example
let ulSurrounding=ulSurround(strings)
["<ul>","<li>abc</li>","<li>lmn</li>","<li>cd</li>","</ul>"]*/

function ulSurround(array) {
    // let res = array.map(function (e) {
    //     return `<li>${e}</li>`; // => "<li>" + e + "</li>";
    // })
    let res = array.map(elem => `<li>${elem}</li>`);  //  <-lambda expression
    res.unshift("<ul>");   // =>res.splice(0, 0, "<ul>");
    res.push("</ul>");     // =>res.splice(array.length, 0 , "</ul>");
    return res;
}

let arr = ["123", "abc", 'lmn'];
console.log(`input: ${arr} output: ${ulSurround(arr)}`);

/*2. Write function count that returns how many times a given element
encountered in a given array
2.1 Example of input array let strings=["abc","lmn","cd","abc","abc"]
2.2 Output for the above example count(strings,"abc") will be 3 and
count(strings,"ab") will be 0 */

function count(array, element) {
    return array.reduce((res, cur) => cur == element ? res + 1 : res, 0);
}

let ar7 = ["abc", "lmn", "cd", "abc", "abc", "cd"];
let value = "cd";
console.log(`input: ${ar7}, counter of ${value} is ${count(ar7, value)}`)

/**3. Write function arrayCopy that gets the following parameters : function
arrayCopy(src,srcPos,dst,dstPos,length) {....}
where: 
src - source array, 
srcPos - index of the source array, 
dst - array destination, 
dstPos - index of destination array,
length - number of elements. 
This function should copy length elements from source array beginning from srcPos index to
destination array from dstPos index
Example: let arS = [1,2,3,4,5,6,7]; let arD = [10,20,30,40,50,60,70]
arrrayCopy(arS, 3, arD, 4, 3); Result: arS is not updated, arD =
[10,20,30,40,4,5,6,50,60,70] */

function arrayCopy(src, srcPos, dst, dstPos, length) {
    let arForCopy = src.slice(srcPos, srcPos + length);
    dst.splice(dstPos, 0, ...arForCopy);
    // arForCopy.forEach((e, i) => dst.splice(dstPos + i, 0, e));
    return dst;
}
let array1 = [1, 2, 3, 4, 5, 6, 7];
let array2 = [10, 20, 30, 40, 50, 60, 70]
arrayCopy(array1, 3, array2, 4, 3);
console.log(`ar1: ${array1}, ar2: ${array2} arrayCopy(ar1, 3, ar2, 4, 3): ${array2}`);

/**4. Write function move(array,index,offset) that in a given array moves
element at a given index on a given offset positions (if offset > 0 > to
right, otherwise to left).
Examples: let numbers=[1,2,3,4,5,6,7]; 
move(numbers,3,1)
numbers=[1,2,4,3,5,6,7]; 
(element at index 3 (4) is moved on 1 position left)
move(numbers,2,4)
numbers = [1,2,4,5,6,7,3]. 
(element at index 2 (3) is moved on 4 positions right)
Note: all examples imply the original array of numbers ( let
numbers=[1,2,3,4,5,6,7]) */

function move(array, index, offset) {
    let movedElem = array.splice(index, 1)[0];
    array.splice(index + offset, 0, movedElem);
    return array;
}
console.log(move([1, 2, 3, 4, 5, 6, 7], 3, 3));

//===============CW #15=========================

function getEvenNumbers(numbers) {
    let res = numbers.filter(n => n % 2 == 0);
    return res;
}

let arr1 = [2, 10, 3, -9, 1999]
arr1.sort((a, b) => a - b);
console.log(arr1);

arr1 = ["abcd", "a", "lmn", "y"];
arr1.sort((a, b) => a - b);
console.log(arr1);
arr1.sort((a, b) => a < b ? -1 : 1);
console.log(arr1);

arr1.sort((a, b) => a.length - b.length);
console.log(arr1);