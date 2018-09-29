/*
  By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, we can see that the 6th prime is 13.

  What is the 10 001st prime number?
*/

const nthPrime = n => {
  if (n === 1) return 2
  const primes = [2]
  let cur = 1
  while (cur++) {
    if (primes.every(prime => cur % prime)) {
      if (--n === 1) return cur
      primes.push(cur)
    }
  }
}

console.log(nthPrime(10001)) // 104743
