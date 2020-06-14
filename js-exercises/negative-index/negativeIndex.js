function isValidNumericProperty(property) {
  if (!property || typeof property === 'symbol') {
    return false;
  }

  const value = Number(property);
  return !Number.isNaN(value);
}

function negativeIndex(array) {
  if (!Array.isArray(array)) {
    throw new TypeError('Only arrays are supported');
  }

  return new Proxy(array, {
    get: function (target, prop) {
      if (isValidNumericProperty(prop)) {
        let index = Number(prop);

        if (index < 0) {
          index = target.length + index;
          return target[index];
        }

        return target[index];
      } else {
        return target[prop];
      }
    },

    set: function (target, prop, value) {
      if (isValidNumericProperty(prop)) {
        let index = Number(prop);

        if (index < 0) {
          index = target.length + index;
        }

        target[index] = value;

        return true;
      }

      return false;
    },
  });
}

export { negativeIndex };
