/*
  The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.

  Find the sum of all the primes below two million.
*/

const sumOfAllPrimesBelow = n => {
  if (n < 2) return 0
  const primes = [2]
  let cur = 1
  while (++cur < n) if (primes.every(prime => cur % prime)) primes.push(cur)
  return primes.reduce((a, b) => a + b, 0)
}

console.log(sumOfAllPrimesBelow(2000000)) // 142913828922
