/*
  If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

  Find the sum of all the multiples of 3 or 5 below 1000.
*/

const sumOfMultiplesLessThan = (primes = [], max) => {
  let sum = 0
  for (let n = 1; n < 1000; n++) if (primes.some(prime => n % prime === 0)) sum += n
  return sum
}

console.log(sumOfMultiplesLessThan([3, 5], 1000)) // 233168
