
function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
        return false;
    }
    const occurrences = {};
    let arrStr1 = str1.split('');
    for (let i = 0; i < arrStr1.length; i++) {
        let elem = str1[i];
        if (occurrences[elem]) {
            occurrences[elem]++;
        } else {
            occurrences[elem] = 1;
        }
    }
    let arrStr2 = str2.split('');
    for (let i = 0; i < arrStr2.length; i++) {
        let element = str2[i];
        if (!occurrences[element]) {
            return false;
        } else {
            occurrences[element]--;
        };
    }
    return true; //we return false in lines 19 - 20. because  0 == false. 
}
let str = "yellow";
['weloyl', 'wolley', 'leloyw', 'weloly'].forEach(function (e) {
    console.log(`word: ${e}, After iteration the str2 return : ${isAnagram(str, e)}`)
});
['weloll', 'leloy', 'wollet', 'weloyo'].forEach(function (e) {
    console.log(`word: ${e}, After iteration the str2 return : ${isAnagram(str, e)}`)
});

