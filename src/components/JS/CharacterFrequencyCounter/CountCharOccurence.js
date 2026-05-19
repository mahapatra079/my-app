// This code counts how many times each character appears in a string.

const name = "amit";

let count = {};

for (let char of name) {

  if (count[char]) {
    count[char]++;  // character seen before → increment count
  } else {
    count[char] = 1; // character seen first time → set to 1
  }

}

console.log(count);

// I used an object to store character frequencies.

// I loop through each character in the string.

// If the character already exists in the object, I increment the count.

// Otherwise, I initialize it with 1

