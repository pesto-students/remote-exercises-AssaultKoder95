function findSum(a, b) {
  return Math.floor(((a - b + 1) * (a + b)) / 2);
}

function sumAll(numArray) {
  const [value1, value2] = numArray;
  return value1 > value2 ? findSum(value1, value2) : findSum(value2, value1);
}

export {
  sumAll,
};
