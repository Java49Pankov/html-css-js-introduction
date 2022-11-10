
function minMax(number) {
    return number.reduce((arr, cur) => {
        arr[0] = cur > arr[0] ? arr[0] : cur,
            arr[1] = cur < arr[1] ? arr[1] : cur;
        return arr;
    }, []);
}
let array = [1, 2, 3, 4, 5]
console.log(minMax(array));
console.log(`array input: ${array} array output minMax value: [${minMax(array)}]`);

function deleteWithPrefix(strings, prefix) {
    let res = strings.filter(str => prefix > str);
    return res;
}
let arr = ['abc', 'old_abc', 'lmn', '123', 'old_lmn'];
let prefix = "old_"
console.log(`deleted prefix value: ${prefix} result: ${deleteWithPrefix(arr, prefix)}`)

//Only the if else statement comes to mind for solving the task. 
function getSortedEvenOdd(numbers) {
    let res = numbers.sort(function (a, b) {
        if ((a % 2 == 0) && (b % 2 == 0)) {
            return a > b ? 1 : -1;
        } if ((a % 2 != 0) && (b % 2 == 0)) {
            return 1;
        }
        return -1;
    })
    return res;
}
let arrNum = [1, 6, 3, 8, 5, 2, 7, 4];
console.log(`sorted from even to odd: [${getSortedEvenOdd(arrNum)}]`);

