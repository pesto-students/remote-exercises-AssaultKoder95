function createCharacterFrequencyMap(elementArray) {
  const frequencyMap = new Map();

  elementArray.forEach((element) => {
    if (frequencyMap.has(element)) {
      const frequency = frequencyMap.get(element);
      frequencyMap.set(element, frequency + 1);
    } else {
      frequencyMap.set(element, 1);
    }
  });

  return frequencyMap;
}

const getFrequency = (frequencyMap) => (element) => frequencyMap.get(element);

function frequencySort(elementArray) {
  if (!elementArray.length) return [];
  if (elementArray.length === 1) return elementArray;

  const frequencyMap = createCharacterFrequencyMap(elementArray);
  const uniqueElements = [...new Set(elementArray)];
  const frequency = getFrequency(frequencyMap);

  return uniqueElements.sort((element1, element2) => frequency(element2) - frequency(element1));
}

export { frequencySort as freqSort };
