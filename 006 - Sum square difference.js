/*
  The sum of the squares of the first ten natural numbers is,
  1 ^ 2 + 2 ^ 2 + ... + 10 ^ 2 = 385

  The square of the sum of the first ten natural numbers is,
  (1 + 2 + ... + 10) ^ 2 = 55 ^ 2 = 3025

  Hence the difference between the sum of the squares of the first ten natural numbers and the square of the sum is 3025 − 385 = 2640.

  Find the difference between the sum of the squares of the first one hundred natural numbers and the square of the sum.
*/

const differenceBetweenTheSumOfSquaresAndTheSquareOfTheSumOfTheFirstNNaturalNumbers = n => {
  let sum = 0
  let squares = 0
  while (n--) {
    sum += n + 1
    squares += Math.pow(n + 1, 2)
  } return sum * sum - squares
}

console.log(
  differenceBetweenTheSumOfSquaresAndTheSquareOfTheSumOfTheFirstNNaturalNumbers(100)
) // 25164150
