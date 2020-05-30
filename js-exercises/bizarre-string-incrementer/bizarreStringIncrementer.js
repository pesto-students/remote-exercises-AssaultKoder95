// Start your implementation here

function bizarreStringIncrementer(string) {
  const trailingNumberMatchingGroup = string.match(/\d+$/);

  if (trailingNumberMatchingGroup === null) {
    return `${string}1`;
  }

  const resultantString = string.replace(/\d+$/, '');
  const trailingNumber = trailingNumberMatchingGroup[0];
  let stringifiedResultantNumber = (parseInt(trailingNumber, 10) + 1).toString();

  if (stringifiedResultantNumber.length < trailingNumber.length) {
    const requiredPaddingLength = trailingNumber.length - stringifiedResultantNumber.length;

    for (let i = 0; i < requiredPaddingLength; i += 1) {
      stringifiedResultantNumber = `0${stringifiedResultantNumber}`;
    }
  }

  return resultantString + stringifiedResultantNumber;
}

export { bizarreStringIncrementer };
