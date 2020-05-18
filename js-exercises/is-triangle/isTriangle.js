function isTriangle(...sides) {
  const [a, b, c] = sides;
  let isValid = true;

  if (!(a + b > c)) isValid = false;

  if (!(c + b > a)) isValid = false;

  if (!(c + a > b)) isValid = false;

  return isValid;
}

export {
  isTriangle,
};
