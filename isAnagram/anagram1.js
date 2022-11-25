/* The implementation is based on comparing objects
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
    return false;
  }
  return isShallowEqual(getOccurrences(word1.toLowerCase()), getOccurrences(word2.toLowerCase()));
//    return isDeepEqual(word1.toLowerCase()), getOccurrences(word2.toLowerCase()));
}
function isShallowEqual(occurrences1, occurrences2) {
    const keys1 = Object.keys(occurrences1);
//    const keys2 = Object.keys(occurrences2);
    for (const key of keys1) {
      if (occurrences2[key] !== occurrences1[key]) {
        return false;
      }
    }
    return true;
}


function isDeepEqual(object1, object2) {
    const keys1 = Object.keys(object1);
    const keys2 = Object.keys(object2);
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (const key of keys1) {
      const val1 = object1[key];
      const val2 = object2[key];
      const areObjects = isObject(val1) && isObject(val2);
      if (areObjects && !isDeepEqual(val1, val2) || !areObjects && val1 !== val2) {
        return false;
      }
    }
    return true;
  }
  function isObject(object) {
    return object != null && typeof object === 'object';
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