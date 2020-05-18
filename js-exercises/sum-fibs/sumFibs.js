function sumFibs(limit) {
  let firstTerm = 1;
  let secondTerm = 1;
  let sum = 0;
  while (firstTerm <= limit) {
    if (firstTerm % 2 !== 0) {
      sum += firstTerm;
    }

    [firstTerm, secondTerm] = [secondTerm, firstTerm + secondTerm];
  }

  return sum;
}

export {
  sumFibs,
};
