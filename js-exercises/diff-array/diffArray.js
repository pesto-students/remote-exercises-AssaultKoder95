function filterUniquePrimaryArrayElements(primaryArray, secondaryArray) {
  return primaryArray.filter((val) => secondaryArray.indexOf(val) === -1);
}

function diffArray(inputArray1, inputArray2) {
  return [
    ...filterUniquePrimaryArrayElements(inputArray1, inputArray2),
    ...filterUniquePrimaryArrayElements(inputArray2, inputArray1),
  ];
}

export { diffArray };
