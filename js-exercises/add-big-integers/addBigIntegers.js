function addTwoStringifiedNumbers(numberString1, numberString2) {
  const sum = [];
  let numberString1Length = numberString1.length - 1;
  let numberString2Length = numberString2.length - 1;
  let carryForward = 0;

  while (numberString1Length >= 0 || numberString2Length >= 0) {
    const parseDigitFromNumberString1 = parseInt(numberString1[numberString1Length], 10) || 0;
    const parseDigitFromNumberString2 = parseInt(numberString2[numberString2Length], 10) || 0;
    let digitSum = parseDigitFromNumberString1 + parseDigitFromNumberString2 + carryForward;

    carryForward = Math.floor(digitSum / 10);
    digitSum %= 10;

    sum.unshift(digitSum);

    numberString1Length -= 1;
    numberString2Length -= 1;
  }

  if (carryForward) sum.unshift(carryForward);

  return sum.join('');
}

function addBigIntegers(intString) {
  const listOfStringifiedNumbers = intString.split('\n');
  const sum = listOfStringifiedNumbers.reduce(addTwoStringifiedNumbers);

  return sum;
}

/*
// BigInt solution reference for self knowledge

function addBigIntegers(intString) {
  const listOfStringifiedNumbers = intString.split('\n');
  let sum = BigInt(0);
  listOfStringifiedNumbers.forEach((number) => {
    sum += BigInt(number);
  });

  return sum.toString();
}
*/

export { addBigIntegers };
