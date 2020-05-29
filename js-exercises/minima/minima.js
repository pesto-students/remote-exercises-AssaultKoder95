function minima(maxCount, inputArray) {
  const length = inputArray.length;

  for (let i = 0; i < length; i += 1) {
    if (i === maxCount) {
      break;
    }

    let minValueIndex = i;

    for (let j = i + 1; j < length; j += 1) {
      if (inputArray[minValueIndex] > inputArray[j]) {
        minValueIndex = j;
      }
    }

    if (minValueIndex !== i) {
      [inputArray[i], inputArray[minValueIndex]] = [inputArray[minValueIndex], inputArray[i]];
    }
  }

  return inputArray.splice(0, maxCount);
}

export { minima };
