function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}

function rearrangeArray(arr) {
  const primes = arr.filter(isPrime);
  if (primes.length < 2) {
    throw new Error("The array must contain at least two prime numbers.");
  }
  const largestPrime = Math.max(...primes);
  const smallestPrime = Math.min(...primes);
  const nonPrimes = arr.filter(
    (num) => num !== largestPrime && num !== smallestPrime
  );
  const sortedNonPrimes = nonPrimes.sort((a, b) => b - a);
  return [largestPrime, ...sortedNonPrimes, smallestPrime];
}

const example1 = [5, 1, 8, 11, 2];
console.log(rearrangeArray(example1));

const example2 = [1, 6, 4, 13, 9, 3];
console.log(rearrangeArray(example2));
