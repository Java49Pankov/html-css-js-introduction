function ulSurround(array) {
    let strArray = Array.from(array);
    let str = strArray.map(function (e) {
        return "<li>" + e + "</li>";
    })
    str.splice(0, 0, "<ul>");
    str.push("</ul>");
    return str;
}
console.log(ulSurround(["abc", "lmn", "cd"]));

function count(arr, value) {
    let res = 0;
    arr.forEach(function (e) {
        if (e == value) {
            res++;
        }
    })
    return res;
}
console.log("Found value = ", count(["abc", "lmn", "cd", "abc", "abc", "cd"], "cd"));


//In the arrayCopy function I think I do a false copy. 
// And I didn’t understand how to make it not an array in an array
function arrayCopy(arS, arSPos, arD, arDPos, length) {
    let endIndex = arSPos + length;
    let arr = arS.slice(arSPos, endIndex);
    arD.splice(arDPos, 0, arr);
    return arD;
}
console.log(arrayCopy([1, 2, 3, 4, 5, 6, 7], 3, [10, 20, 30, 40, 50, 60, 70], 4, 3));

function move(array, index, offset) {
    let numOfInd = array[index];
    array.splice(index, 1);
    array.splice(index + offset, 0, numOfInd);

    return array;
}
console.log(move([1, 2, 3, 4, 5, 6, 7], 3, -3));