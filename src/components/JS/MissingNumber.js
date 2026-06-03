// Find the missing number

const numbers = [1, 2, 4, 5];

for (let i = 1; i <= 5; i++) {
  if (!numbers.includes(i)) {
    console.log(i); // 3
  }
}


//Sum Formula (reduce method)

// const numbers = [1, 2, 4, 5];

// const n = 5;
// const expectedSum = (n * (n + 1)) / 2;
// const actualSum = numbers.reduce((sum, num) => sum + num, 0);

// const missingNumber = expectedSum - actualSum;

// console.log(missingNumber)


// Calculation:

// Expected Sum = 1 + 2 + 3 + 4 + 5 = 15
// Actual Sum = 1 + 2 + 4 + 5 = 12
// Missing Number = 15 - 12 = 3