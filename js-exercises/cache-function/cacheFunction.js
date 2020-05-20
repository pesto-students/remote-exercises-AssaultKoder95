const cacheFunction = (callback) => {
  const cache = {};

  return function (...args) {
    if (callback in cache) {
      return cache[callback];
    }

    cache[callback] = callback(...args);

    return callback(...args);
  };
};

export { cacheFunction };
