function compareAnimalNames(firstAnimalName, secondAnimalName) {
  if (firstAnimalName < secondAnimalName) {
    return -1;
  }
  if (firstAnimalName > secondAnimalName) {
    return 1;
  }
  return 0;
}

const animalSort = (animals) => {
  return animals.sort((firstAnimal, secondAnimal) => {
    if (firstAnimal.numberOfLegs === secondAnimal.numberOfLegs) {
      return compareAnimalNames(firstAnimal.name, secondAnimal.name);
    }

    return firstAnimal.numberOfLegs - secondAnimal.numberOfLegs;
  });
};

export { animalSort };
