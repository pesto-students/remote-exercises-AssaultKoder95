function isTriangle(...sides) {
  const [side1, side2, side3] = sides;

  return ((side1 + side2 > side3) && (side2 + side3 > side1) && (side3 + side1 > side2));
}

export {
  isTriangle,
};
