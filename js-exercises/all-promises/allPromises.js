function allPromises(promiseArray) {
  if (!Array.isArray(promiseArray)) {
    throw new Error('Incorrect argument type, it should be an array');
  }

  if (!promiseArray.length) return Promise.resolve([]);

  return new Promise((resolve, reject) => {
    const results = [];
    let completed = 0;

    promiseArray.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((result) => {
          results[index] = result;
          completed += 1;

          if (completed === promiseArray.length) {
            resolve(results);
          }
        })
        .catch((error) => reject(error));
    });
  });
}

export { allPromises };
