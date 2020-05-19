function getPrimeNumbers(limit) {
  const isPrime = Array(limit + 1).fill(true);
  isPrime[0] = false;
  isPrime[1] = false;

  for (let i = 0; i <= limit; i += 1) {
    if (isPrime[i]) {
      for (let j = i + i; j <= limit; j += i) {
        isPrime[j] = false;
      }
    }
  }

  const primes = [];

  for (let i = 0; i <= limit; i += 1) {
    if (isPrime[i]) {
      primes.push(i);
    }
  }

  return primes;
}

function sumPrimes(limit) {
  return getPrimeNumbers(limit).reduce((a, b) => a + b, 0);
}

export { sumPrimes };
