/*
  The prime factors of 13195 are 5, 7, 13 and 29.

  What is the largest prime factor of the number 600851475143 ?
*/

const largestPrimeFactor = number => {
  if (number === 2) return 2
  for (let n = 3; n <= number; n += 2) {
    while (number % n === 0) number /= n
    if (number === 1) return n
  } return NaN
}

console.log(largestPrimeFactor(600851475143)) // 6857
