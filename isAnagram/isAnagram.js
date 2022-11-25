
function isAnagram(str1, str2) {
    let res = false;
    if (str.length == str2.length) {
        res = true;
        const str1Occurrences = getSimbolOccurrences(str1);
        res = checkAnagram(str1Occurrences, str2);
    }
    return res;
}

function symbolProcessing(res, current) {
    if (res[current]) {
        res[current]++;
    } else {
        res[current] = 1;
    }
    return res;
}

function getSimbolOccurrences(string) {
    const stringArray = Array.from(string);
    return stringArray.reduce(symbolProcessing, {});
}

function checkAnagram(occurrences, string) {
    const stringArr = Array.from(string);
    return stringArr.every(symbol => {
        let res = false;
        if (occurrences[symbol]) {
            res = true;
            occurrences[symbol]--;
        }
        return res;
    })
}

let str = "yellow";
['weloyl', 'wolley', 'leloyw', 'weloly'].forEach(function (e) {
    console.log(`word: ${e}, After iteration the str2 return : ${isAnagram(str, e)}`)
});
['weloll', 'leloy', 'wollet', 'weloyo'].forEach(function (e) {
    console.log(`word: ${e}, After iteration the str2 return : ${isAnagram(str, e)}`)
});

// ----one line code. Not the best solution-----

function isAnagrams(str1, str2) {
    return Array.from(str1).sort().join('') == Array.from(str2).sort().join('');
}