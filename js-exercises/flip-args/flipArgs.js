function flipArgs(calleeFunction) {
  return (...args) => calleeFunction(...Array.from(args).reverse());
}

export { flipArgs };
