/* The algorithm is based on Yuri recomendations
*/
function getOccurrences(word) {
    let wordAr = Array.from(word);
    const occurrences = {};
    wordAr.forEach(element => {
        if (occurrences[element]) {
            occurrences[element]++;
        } else {
            occurrences[element] = 1;
        }
    });
    return occurrences;
}
function isAnagram(word1, word2) {
  if(word1.length != word2.length) {
    console.log(word1.length, '!=', word2.length)
    return false;
  }
  console.log(word1, word2);
  let occurrences1 = getOccurrences(word1.toLowerCase());
  console.log('BEFORE', occurrences1);
  let arr2 = Array.from(word2.toLowerCase());
  for(let i=0; i<arr2.length; i++) {
    if(occurrences1[arr2[i]] == undefined) {
      console.log(arr2[i], ' is not found');
      console.log('AFTER', occurrences1);
      return false;
    }
    if(--occurrences1[arr2[i]] < 0) {
      console.log('AFTER', occurrences1);
      return false;
    }
  }
  console.log('AFTER', occurrences1);
  return true;
}


const w1 = 'CatAndDog';
const w2 = 'DogAndCat';
console.log('1. ', w1, w2, isAnagram(w1, w2));
const word = 'Yellow';
console.log('2. ', word, 'weloly', isAnagram(word, 'weloly'));
console.log('3. ', word, 'leloyw', isAnagram(word, 'leloyw'));
console.log('4. ', word, 'wolley', isAnagram(word, 'wolley'));
console.log('5. ', word, 'weloyl', isAnagram(word, 'weloyl'));
// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
console.log('6. ', word, 'weloll', isAnagram(word, 'weloll'));  // (three “l” letters, should be two)
console.log('7. ', word, 'leloy', isAnagram(word, 'leloy'));   // (should be with the same length)
console.log('8. ', word, 'wollet', isAnagram(word, 'wollet')); // (letter “t” doesn’t exist)
console.log('9. ', word, 'weloyo', isAnagram(word, 'weloyo'));  //(two “o” letters, should be one)