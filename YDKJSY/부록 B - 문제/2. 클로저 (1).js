const isPrime = (function hidePrimeCache() {
  let cache = {};
  return function isPrime(n) {
    if (n in cache) return cache[n];

    if (n < 2) {
      cache[n] = false;
      return cache[n];
    }

    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i == 0) {
        cache[n] = false;
        return cache[n];
      }
    }

    cache[n] = true;
    return cache[n];
  };
})();

console.log(isPrime(11));
console.log(isPrime(12));

const factorize = (function factorizeCache() {
  let cache = {};

  return function factorize(n) {
    if (n in cache) return cache[n];

    if (isPrime(n)) {
      cache[n] = [n];
      return cache[n];
    }

    let i = Math.floor(Math.sqrt(n));
    while (n % i !== 0) {
      i--;
    }
    cache[n] = [...factorize(i), ...factorize(n / i)];
    return cache[n];
  };
})();

console.log(factorize(12));
