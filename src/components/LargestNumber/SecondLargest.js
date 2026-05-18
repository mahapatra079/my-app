// Find Second Largest Number

const arr = [11, 20, 30, 40, 80, 100];
let largest = -Infinity;
let secondLargest = -Infinity;

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    secondLargest = largest;
    largest = arr[i];
  } else if (arr[i] > secondLargest && arr[i] !== largest) {
    secondLargest = arr[i];
  }
}

console.log("Largest:", largest);
console.log("Second Largest:", secondLargest);