function findSum(upperBound, lowerBound) {
  return Math.floor(((upperBound - lowerBound + 1) * (upperBound + lowerBound)) / 2);
}

function sumAll(numArray) {
  const [value1, value2] = numArray;
  return value1 > value2 ? findSum(value1, value2) : findSum(value2, value1);
}

export {
  sumAll,
};
