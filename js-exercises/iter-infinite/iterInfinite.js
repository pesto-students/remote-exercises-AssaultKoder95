function* count(start, step = 1) {
  let result = start;
  while (true) {
    yield result;
    result += step;
  }
}

export { count };
