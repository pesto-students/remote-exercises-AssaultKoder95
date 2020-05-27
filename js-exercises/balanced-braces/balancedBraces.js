const bracesObj = {
  '{': '}',
  '[': ']',
  '(': ')',
};

const findOpeningBracket = (closingBracket) => Object.keys(bracesObj).find((key) => bracesObj[key] === closingBracket);

const sanitize = (string) =>
  string
    .split('')
    .map((letter) => {
      if (Object.keys(bracesObj).indexOf(letter) !== -1 || Object.values(bracesObj).indexOf(letter) !== -1) {
        return letter;
      }

      return '';
    })
    .join('');

function balancedBraces(string) {
  const stack = [];
  const sanitizedString = sanitize(string);

  for (const letter of sanitizedString) {
    if (Object.keys(bracesObj).indexOf(letter) !== -1) {
      stack.push(letter);
    } else if (stack[stack.length - 1] === findOpeningBracket(letter)) {
      stack.pop();
    }
  }

  return !stack.length;
}

export { balancedBraces };
