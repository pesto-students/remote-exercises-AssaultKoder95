function rangeIter(lowerBound, upperBound) {
  if (lowerBound === undefined || upperBound === undefined) {
    throw new TypeError('undefined is not a number');
  }

  if (typeof lowerBound !== 'number') {
    throw new TypeError(`${lowerBound} is not a number`);
  }

  if (typeof upperBound !== 'number') {
    throw new TypeError(`${upperBound} is not a number`);
  }

  return {
    [Symbol.iterator]() {
      let current = lowerBound - 1;
      return {
        next() {
          if (current >= upperBound) return { done: true };
          current += 1;

          return {
            value: current,
            done: false,
          };
        },
      };
    },
  };
}

export { rangeIter };
