const limitFunctionCallCount = (callback, limit) => {
  let callbackFnCallCount = 0;
  return (...args) => {
    if (callbackFnCallCount < limit) {
      callbackFnCallCount += 1;
      return callback(...args);
    }
    return null;
  };
};

export { limitFunctionCallCount };
