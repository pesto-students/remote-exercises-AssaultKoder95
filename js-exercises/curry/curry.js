function curry(requiredArguments) {
  return function curried(...args) {
    if (args.length >= requiredArguments.length) {
      return requiredArguments.apply(this, args);
    } else {
      return function (...remainingArgs) {
        return curried.apply(this, args.concat(remainingArgs));
      };
    }
  };
}

export { curry };
