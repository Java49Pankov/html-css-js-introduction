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