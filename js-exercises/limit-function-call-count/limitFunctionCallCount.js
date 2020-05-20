const limitFunctionCallCount = (callback, invocationLimit) => {
  let invocationCount = 0;
  return (...args) => {
    if (invocationCount < invocationLimit) {
      invocationCount += 1;
      return callback(...args);
    }
    return null;
  };
};

export { limitFunctionCallCount };
