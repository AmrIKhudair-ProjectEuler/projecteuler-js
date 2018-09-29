/*
  2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

  What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20?
*/

const smallestPositiveNumberEvenlyDevisibleByAllPositiveNumbersUntil = n => {
  let p = n
  let passes
  while (++p) {
    passes = true
    for (let i = 1; i <= n; i++) if (p % i) { passes = false; break }
    if (passes) return p
  }
}

console.log(smallestPositiveNumberEvenlyDevisibleByAllPositiveNumbersUntil(20)) // 232792560
