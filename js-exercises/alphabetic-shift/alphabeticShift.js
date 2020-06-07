const CAPITAL_A_UTF_CODE = 65;
const CAPITAL_Z_UTF_CODE = 90;
const SMALL_A_UTF_CODE = 97;
const SMALL_Z_UTF_CODE = 122;

function isAlphabetInRange(alphabet, lowerLimit, upperLimit) {
  return alphabet >= lowerLimit && alphabet <= upperLimit;
}

const retainAlphabetInRange = (alphabet, lowerLimit, shiftBy) => {
  let updatedAlphabet = alphabet - lowerLimit;
  updatedAlphabet = (updatedAlphabet + shiftBy) % 26;
  updatedAlphabet += lowerLimit;

  return updatedAlphabet;
};

function incrementAlphabetByShiftFactor(alphabet, shiftFactor) {
  let alphabetUTFCode = alphabet.charCodeAt(0);

  if (isAlphabetInRange(alphabetUTFCode, CAPITAL_A_UTF_CODE, CAPITAL_Z_UTF_CODE)) {
    if (alphabetUTFCode + shiftFactor > CAPITAL_Z_UTF_CODE) {
      alphabetUTFCode = retainAlphabetInRange(alphabetUTFCode, CAPITAL_A_UTF_CODE, shiftFactor);
    } else {
      alphabetUTFCode += shiftFactor;
    }
  } else if (isAlphabetInRange(alphabetUTFCode, SMALL_A_UTF_CODE, SMALL_Z_UTF_CODE)) {
    if (alphabetUTFCode + shiftFactor > SMALL_Z_UTF_CODE) {
      alphabetUTFCode = retainAlphabetInRange(alphabetUTFCode, SMALL_A_UTF_CODE, shiftFactor);
    } else {
      alphabetUTFCode += shiftFactor;
    }
  }

  return String.fromCharCode(alphabetUTFCode);
}

const alphabeticShiftUsingShiftFactor = (string, shiftBy) => {
  let modifiedString = '';
  const shiftFactor = shiftBy;
  for (const alphabet of string) {
    modifiedString += incrementAlphabetByShiftFactor(alphabet, shiftFactor);
  }

  return modifiedString;
};

const alphabeticShift = (string, shiftBy = 1) => alphabeticShiftUsingShiftFactor(string, shiftBy);

export { alphabeticShift, alphabeticShiftUsingShiftFactor };
