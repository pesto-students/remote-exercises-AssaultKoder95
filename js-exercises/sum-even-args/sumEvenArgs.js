// compact solution
const isElementDivisibleBy2 = (element) => element % 2 === 0;

function sumEvenValuedElements(...args) {
  return args.reduce((result, element) => (isElementDivisibleBy2(element) ? element + result : result), 0);
}

/*
// more verbose solution
const sumEvenValuedElements = (...elements) => {
  let sum = 0;
  const elementCount = elements.length;

  for (let index = 0; index < elementCount; index++) {
    if (isElementDivisibleBy2(elements[index])) {
      sum += elements[index];
    }
  }

  return sum;
};
*/

export { sumEvenValuedElements as sumEvenArgs };
