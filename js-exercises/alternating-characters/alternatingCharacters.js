const areNeighbouringCharactersEqual = (currentCharacter, nextCharacter) => currentCharacter === nextCharacter;

function alternatingCharacters(arrayOfStrings) {
  return arrayOfStrings.map((string) => {
    const removedCharactersArray = string
      .split('')
      .filter((character, index, array) => areNeighbouringCharactersEqual(character, array[index + 1]));

    return removedCharactersArray.length;
  });
}

export { alternatingCharacters };
