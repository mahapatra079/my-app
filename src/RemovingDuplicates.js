const arr = ["japan", "India", "Usa", "india"];

const unique = []; // This array will hold the unique values from the original array.
const seen = {}; //track which values we have already encountered.

for (let i = 0; i < arr.length; i++) {
  let value = arr[i];
  let key = value.toLowerCase(); // normalize case

  if (!seen[key]) {
    seen[key] = true;
    unique[unique.length] = value;
  }
}

console.log(unique);

// Output: ["japan", "India", "Usa"]
// This code creates a new array `unique` that contains only the unique values from the original array `arr`,
//  ignoring case sensitivity. The `seen` object is used to track which values have already been encountered, allowing the code to efficiently filter out duplicates.


// const arr = [1, 2, 3, 2, 4, 1, 5];

// const unique = [];
// const seen = {};

// for (let i = 0; i < arr.length; i++) {
//   let value = arr[i];

//   if (!seen[value]) {
//     seen[value] = true;
//     unique[unique.length] = value;
//   }
// }

// console.log(unique);