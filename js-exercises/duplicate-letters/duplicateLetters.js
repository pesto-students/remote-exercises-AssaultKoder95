
function duplicateLetters(string) {
  const letters = string.split('');
  const letterFrequencyMap = {};

  letters.forEach((letter) => {
    if (!letterFrequencyMap[letter]) {
      letterFrequencyMap[letter] = 0;
    }

    letterFrequencyMap[letter] += 1;
  });

  const letterFrequencyKeyValuePair = Object.entries(letterFrequencyMap);

  const duplicateLetter = { value: null, count: 0 };

  for (let index = 0; index < letterFrequencyKeyValuePair.length; index += 1) {
    if (letterFrequencyKeyValuePair[index][1] > duplicateLetter.count) {
      [duplicateLetter.value, duplicateLetter.count] = letterFrequencyKeyValuePair[index];
    }
  }

  return duplicateLetter.count > 1 ? duplicateLetter.count : false;
}

export {
  duplicateLetters,
};
