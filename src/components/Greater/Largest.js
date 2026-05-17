// Find Largest Number

const arr = [11, 20, 30, 40, 80, 100];
let largest = arr[0];

for (let i = 0; i < arr.length; i++) {
  if (arr[i] > largest) {
    largest = arr[i];
  }
}

console.log(largest);

// ussing Sort method

    // const arr = [11,20,30,40,80,100];
    // arr.sort((a, b) => b - a);

    // console.log(arr[1]);