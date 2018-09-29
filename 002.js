/*
    * Even Fibonacci numbers

    Each new term in the Fibonacci sequence is generated by adding the previous two terms. By starting with 1 and 2, the first 10 terms will be:

    1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...

    By considering the terms in the Fibonacci sequence whose values do not exceed four million, find the sum of the even-valued terms.
*/

let sum = 0

for (let [a, b] = [1, 2]; a <= 4000000; [a, b] = [b, a + b]) if (a % 2 === 0) sum += a

console.log(sum) // 4613732
