
function duplicateLetters(...args) {
  const str = args[0];
  const splitString = str.split('');
  const hashMap = {};

  splitString.forEach((letter) => {
    if (!hashMap[letter]) {
      hashMap[letter] = 0;
    }

    hashMap[letter] += 1;
  });

  const charKeyValue = Object.entries(hashMap);
  charKeyValue.sort((a, b) => b[1] - a[1]);

  if (charKeyValue[0][1] === 1) {
    return false;
  }

  return charKeyValue[0][1];
}

export {
  duplicateLetters,
};
