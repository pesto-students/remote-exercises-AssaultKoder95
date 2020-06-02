function allSettled(promiseArray) {
  if (!Array.isArray(promiseArray)) {
    throw new Error('Incorrect argument type, it should be an array');
  }

  if (!promiseArray.length) return Promise.resolve([]);

  return new Promise((resolve) => {
    const results = [];
    let processedPromiseCount = 0;

    promiseArray.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((result) => {
          results[index] = { status: 'fulfilled', value: result };
          processedPromiseCount += 1;

          if (processedPromiseCount === promiseArray.length) {
            resolve(results);
          }
        })
        .catch((error) => {
          results[index] = { status: 'rejected', reason: new Error(error) };
          processedPromiseCount += 1;
          if (processedPromiseCount === promiseArray.length) {
            resolve(results);
          }
        });
    });
  });
}

export { allSettled };
