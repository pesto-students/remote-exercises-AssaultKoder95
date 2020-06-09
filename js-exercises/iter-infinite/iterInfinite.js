function* count(start, step = 1) {
  let result = start;
  while (true) {
    yield result;
    result += step;
  }
}

function* cycle(string, limit) {
  let index = 0;
  const { length } = string;
  let currentCount = 0;

  while (true) {
    if (currentCount === limit) return;

    if (index === length) {
      index = 0;
    }

    yield string[index];
    index += 1;
    currentCount += 1;
  }
}

export { count, cycle };
