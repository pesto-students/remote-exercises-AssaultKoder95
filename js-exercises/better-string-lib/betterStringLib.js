function createCodePointsArray(string) {
  const codePoints = [];

  for (const char of string) {
    codePoints.push(char.codePointAt(0));
  }

  return codePoints;
}

function reverse(string) {
  const codePoints = createCodePointsArray(string);
  const reversedCodePoints = codePoints.reverse();
  return String.fromCodePoint(...reversedCodePoints);
}

function equal(firstEl, secondEl) {
  const codePointsForFirstEl = createCodePointsArray(firstEl);
  const codePointsForSecondEl = createCodePointsArray(secondEl);

  return JSON.stringify(codePointsForFirstEl) === JSON.stringify(codePointsForSecondEl);
}

export { reverse, equal };
