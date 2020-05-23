function chunkArrayInGroups(array, chunkSize) {
  const resultantArray = [];

  while (array.length) {
    const chunkSizedArray = array.splice(0, chunkSize);
    resultantArray.push(chunkSizedArray);
  }

  return resultantArray;
}

export { chunkArrayInGroups };
