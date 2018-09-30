/*
    Starting in the top left corner of a 2×2 grid, and only being able to move to the right and down, there are exactly 6 routes to the bottom right corner.

    How many such routes are there through a 20×20 grid?
*/

const countRoutsThroughGridOfSize = n => {
  let f = 1
  for (let i = 2 * n; i > 1; i--) {
    if (i > n) f *= i
    else f /= i
  }
  return Math.round(f)
}

console.log(countRoutsThroughGridOfSize(20)) // 137846528820
