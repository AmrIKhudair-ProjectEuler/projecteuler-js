/*
  A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 = 91 × 99.

  Find the largest palindrome made from the product of two 3-digit numbers.
*/

const largetPalindromeProductOFTwoNDigitsNumber = n => {
  const max = Math.pow(10, n) - 1
  let largest = 0
  let passes
  for (let a = max; a > Math.pow(10, n - 1) - 1; a--) {
    for (let b = max; b >= a; b--) {
      const p = a * b
      if (p <= largest) continue
      const s = '' + p
      passes = true
      for (let i = 0; i < s.length / 2 - 0.5; i++) {
        if (s[i] !== s[s.length - i - 1]) { passes = false; break }
      } if (passes) largest = p
    }
  } return largest
}

console.log(largetPalindromeProductOFTwoNDigitsNumber(3)) // 906609
