const fibonacciIter = {
  [Symbol.iterator]() {
    let first = 1;
    let second = 1;

    return {
      next() {
        const current = second;
        second = first;
        first += current;
        return { value: current, done: false };
      },
    };
  },
};

export { fibonacciIter };
