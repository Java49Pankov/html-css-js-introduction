/*1. Write function ulSurround that surrounds array of strings inside <ul></ul>
element.
1.1 Example of input array let strings=["abc","lmn","cd"]
1.2 Output array for the above example
let ulSurrounding=ulSurround(strings)
["<ul>","<li>abc</li>","<li>lmn</li>","<li>cd</li>","</ul>"]*/

function ulSurround(array) {
    let res = array.map(elem => `<li>${elem}</li>`);
    res.unshift("<ul>");
    res.push("</ul>");
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