/*
    A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
    a ^ 2 + b ^ 2 = c ^ 2

    For example, 3 ^ 2 + 4 ^ 2 = 9 + 16 = 25 = 5 ^ 2.

    There exists exactly one Pythagorean triplet for which a + b + c = 1000.
    Find the product abc.
*/

const productOfTripletWhoseSumEquals = n => {
  for (let c = Math.floor(n / 3) + 1; c < n; c++) {
    for (let b = Math.floor((n - c) / 2) + 1; b < c; b++) {
      const a = n - c - b
      if (c === Math.hypot(a, b)) return a * b * c
    }
  }
}

console.log(productOfTripletWhoseSumEquals(1000)) // 31875000
