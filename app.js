
const person = {
    id: 123, first_name: 'John',
    last_name: 'Ivanov', year: 2000, address: {
        city: 'Holon', street: 'Sokolov',
        appartament: 100
    }
}; // id - key, 123 - value; name - key, 'John' - value 
const yearExp = "ye" + "ar";
console.log(person[yearExp]); // <-- expression
console.log(person.year); // <-- call only by key
const name1 = "first_name";
console.log(person[name1]);
const name2 = "last" + "_name";
console.log(person["last_name"]); // <-- example. not used
console.log("-----------------------")

const personArr = [123, 'John', 'Ivanov', 2000, ['Holon', 'Sokolov', 100]];
console.log(personArr[3]); // <-- in an array call by index
console.log("-----------------------")

const x = {};
const string = "abc";
x[string] = 1;
console.log(x);
x[string]++;
console.log(x);
console.log("-----------------------")

function displayOccurrences(strings) {
    const occurrences = {};
    strings.forEach(element => {
        if (occurrences[element]) {
            occurrences[element]++;
        } else {
            occurrences[element] = 1;
        }
    });
    console.log(occurrences);
    console.log(Object.entries(occurrences));
    const occurrencesAr = Object.entries(occurrences);
    occurrencesAr.sort((e1, e2) => e2[1] - e1[1])
    console.log(occurrencesAr);
}

const strings = ["a", "opr", "lmn", "abc", "lmn", "abc", "lmn", "lmn", "abc", "a"];
displayOccurrences(strings);


//--------HW18-teacher--------------------

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





